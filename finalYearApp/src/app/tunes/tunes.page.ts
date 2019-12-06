import { Component, OnInit } from '@angular/core';
import { TheSessionService } from '../service/the-session.service';
import { Tune } from '../model/tune';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tunes',
  templateUrl: './tunes.page.html',
  styleUrls: ['./tunes.page.scss'],
})
export class TunesPage implements OnInit {
  tunes: Tune[] = [];
  popTunes: Tune[] = [];
 
  constructor(private theSessionService: TheSessionService, private router: RouterModule) {

  }

  getTunes() {
    this.theSessionService.getTunes().subscribe(res => {
      let settings = res["settings"];
      settings.forEach(tune => {
        this.tunes.push(tune);
      });
      console.log(this.tunes);
    }

    )
  }

  getPopTunes() {
    this.theSessionService.getPopTunes().subscribe(res => {
      let tunage = res["tunes"];
      tunage.forEach(tune => {
        this.popTunes.push(tune);
      });
      console.log("hello", this.popTunes);
    }
    )
  }

  getColour(): string{
    let myCols: string[] = [
      "/assets/icons/bagpipe.png",
      "/assets/icons/box.png",
      "/assets/icons/drum.png", 
      "/assets/icons/flute.png", 
      "/assets/icons/harmonica.png", 
      "/assets/icons/harp.png",
      "/assets/icons/mandalin.png",
      "/assets/icons/spoon.png",
      "/assets/icons/viiolin.png",
      "/assets/icons/whistle2.png",
      "/assets/icons/whistle3.png",
      "/assets/icons/yoke.png"
    ];
    var x = Math.floor((Math.random() * 11));
    var ans = myCols[x];
    return ans
  }

  ngOnInit() {
    this.getTunes();
    this.getPopTunes();
  }



}


