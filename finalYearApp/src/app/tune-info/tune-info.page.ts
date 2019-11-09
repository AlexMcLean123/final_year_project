import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheSessionService } from '../service/the-session.service';
import { Tune } from '../model/Tune';
import { TuneDetail } from '../model/TuneDetail';

@Component({
  selector: 'app-tune-info',
  templateUrl: './tune-info.page.html',
  styleUrls: ['./tune-info.page.scss'],
})

export class TuneInfoPage implements OnInit {

  tuneInformation: any;
  videoId: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private service: TheSessionService) { }
  
  getTune(id) {
      this.service.GetIssue(id).subscribe(tune => {
        this.tuneInformation = tune;
        console.log(this.tuneInformation)
      })
  }

  getVideo(name) {
      this.service.getVideoID(name).subscribe(videoId => {
        let settings = videoId["items"];
        settings.forEach(tune => {
          this.videoId.push(tune);
        });
        console.log("VIDEO ID", this.videoId)
      })
  }




  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    //getting the id from the url
    // setTimeout(()=>{
    this.getTune(id);
    console.log("HELLO", this.tuneInformation)
    // }, 5000)

    setTimeout(()=>{
      let name = this.tuneInformation.name.replace(/[^a-zA-Z ]/g, "")
      this.getVideo(name)
      console.log("HELLO", this.tuneInformation)
      }, 3000)
  }

}



//5a8a48d7a6a910d48fcdf56b12c2701c
//api key

//secret key
// ad84229f9b71d8feb13883e2099d75a9