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
    let myCols: string[] = ["/assets/images/reddish.png", "/assets/images/blueish.png", "/assets/images/greenish.png", "/assets/images/brownish.png"];
    var x = Math.floor((Math.random() * 3) + 1);
    var ans = myCols[x];
    return ans;
  }

  ngOnInit() {
    this.getTunes();
    this.getPopTunes();
  }



}


