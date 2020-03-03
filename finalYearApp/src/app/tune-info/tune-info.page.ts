import { Chart } from 'chart.js';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheSessionService } from '../service/the-session.service';
import { AbcFormatter } from '../AbcFormatter';
import abcjs from 'abcjs'
import { CustomTextPipe } from '../customtext.pipe';

@Component({
  selector: 'app-tune-info',
  templateUrl: './tune-info.page.html',
  styleUrls: ['./tune-info.page.scss'],
})

export class TuneInfoPage implements OnInit {
  title = 'dummyApp-YTIFrameAPI';
  abcFormatter: AbcFormatter;
  abc: any;
  /* 1. Some required variables which will be used by YT API*/
  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;

  isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  tuneInformation: any;
  tunebooks: number;
  videoId: any[] = [];
  displayNotes = true;
  displayBar = false;
  constructor(private activatedRoute: ActivatedRoute, private service: TheSessionService) {
    this.abcFormatter = new AbcFormatter();
  }

  init() {
    // Return if Player is already created
    if (window['YT']) {
      this.startVideo();
      return;
    }

    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */
    window['onYouTubeIframeAPIReady'] = () => this.startVideo();
  }
  getTune(id) {
    this.service.GetIssue(id).subscribe(tune => {
      this.tuneInformation = tune;
      console.log(this.tuneInformation.tunebooks)
      console.log(this.tuneInformation.recordings)
      console.log(this.tuneInformation.collections)


    })
  }

  updateDiv() {
    if (this.displayNotes) {
      this.displayNotes = false
      this.displayBar = true
      console.log("rest = " + this.displayNotes + " display = " + this.displayBar)
    }
    else {
      this.displayNotes = true
      this.displayBar = false
    }
  }

  getVideo(name) {
    this.service.getVideoID(name).subscribe(videoId => {
      let settings = videoId["items"];
      settings.forEach(tune => {
        this.videoId.push(tune);
      });
      console.log("VIDEO ID", this.videoId[0].id.videoId)
    })
  }


  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTune(id);

    setTimeout(() => {
      let name = this.tuneInformation.name.replace(/[^a-zA-Z ]/g, "")
      this.getVideo(name + " trad song")
      console.log("HELLO tunes", this.tuneInformation)
    }, 2000)

    setTimeout(() => {
      const tune4 = this.constructAbc();
      abcjs.renderAbc("paper1", tune4);
    }, 1800)

    setTimeout(() => {
      this.video = this.videoId[0].id.videoId
      this.init()
    }, 3000)

    setTimeout(() => {
      new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: [
            "TuneBooks",
            "Collections",
            "Recordings"
          ],
          datasets: [
            {
              label: "Key",
              backgroundColor: [
                "#42f5c2",
                "#42c5f5",
                "#ff5252"
              ],
              data: [
                this.tuneInformation.tunebooks/100,
                this.tuneInformation.collections,
                this.tuneInformation.recordings
              ]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'TuneBooks, Collections and Recordings'
          }
        }
      });
    }, 3000)

  }

  startVideo() {
    this.reframed = false;
    this.player = new window['YT'].Player('player', {
      videoId: this.video,
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        controls: 1,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1

      },
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this),
        'onReady': this.onPlayerReady.bind(this),
      }
    });
  }

  /* 4. It will be called when the Video Player is ready */
  onPlayerReady(event) {
    if (this.isRestricted) {
      event.target.mute();
      event.target.playVideo();
    } else {
      event.target.playVideo();
    }
  }

  /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */
  onPlayerStateChange(event) {
    console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        };
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    };
  };

  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
  };
  getMeasure(type) {
    switch (type) {
      case "jig": return "6/8";
      case "slip jig": return "9/8";
      case "reel": case "hornpipe": case "barndance": case "strathspey": return "4/4";
      case "polka": return "2/4";
      case "slide": return "12/8";
      case "waltz": case "mazurka": return "3/4";
      case "three-two": return "3/2";
    }
  }

  constructAbc() {
    let name = this.tuneInformation.name.replace(/[^a-zA-Z ]/g, "")

    this.abc = "X: 1\nT: " +
      name + "\nM: "
      + this.getMeasure(this.tuneInformation.type) + "\nL: 1/8 \nK:"
      + this.tuneInformation.settings[0].key + "\n"
      + this.abcFormatter.format(this.tuneInformation.settings[0].abc)
    console.log(this.abc)
    return this.abc;
  }



}

