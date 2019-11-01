import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;

  constructor(public menuCtrl: MenuController , private router: RouterModule) {
 

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menuCtrl.enable(true);
  }
}
