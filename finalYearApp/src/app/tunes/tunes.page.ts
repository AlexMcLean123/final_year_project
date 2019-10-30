import { Component, OnInit } from '@angular/core';
import { TheSessionService } from '../service/the-session.service';
import { Tune } from '../model/tune';
import { ModalController } from '@ionic/angular';
import { ModalPageComponent } from '../modal-page/modal-page.component';
@Component({
  selector: 'app-tunes',
  templateUrl: './tunes.page.html',
  styleUrls: ['./tunes.page.scss'],
})
export class TunesPage implements OnInit {
  tunes: Tune[] = [];
  popTunes: Tune[] = [];

  constructor(private theSessionService: TheSessionService, private modal: ModalController) {

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
      console.log("hello" , this.popTunes);
    }

    )
  }

  // async presentModal() {
  //   const modal = await this.modal.create({
  //     component: ModalPageComponent
  //   });
  //   return await modal.present();
  // }


  ngOnInit() {
    this.getTunes();
    this.getPopTunes();
  }

}


