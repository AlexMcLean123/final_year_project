import { Component, OnInit } from '@angular/core';
import { TheSessionService } from '../service/the-session.service';
import { Tune } from '../model/tune';
@Component({
  selector: 'app-tunes',
  templateUrl: './tunes.page.html',
  styleUrls: ['./tunes.page.scss'],
})
export class TunesPage implements OnInit {
  tunes: Tune[] = [];

  constructor(private theSessionService: TheSessionService) {

  }

  getTunes() {
    this.theSessionService.getTunes().subscribe(res => {
      let settings = res["settings"];
      settings.forEach(tune => {
        this.tunes.push(tune);
      });
      console.log(this.tunes);
    // this.tunes = JSON.parse(JSON.stringify(res));
    //   console.log(this.tunes);
    }

    )
  }


  ngOnInit() {
    this.getTunes();
  }

}


