import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Tunes',
      url: '/tunes',
      icon: 'ios-musical-note'
    },
    {
      title: 'Recordings',
      url: '/recordings',
      icon: 'ios-microphone'
    },
    {
      title: 'News',
      url: '/news',
      icon: 'md-paper'
    },
    {
      title: 'Statistics',
      url: '/statistics',
      icon: 'ios-stats'
    },
    {
      title: 'Map',
      url: '/events',
      icon: 'ios-map'
    }
  
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
