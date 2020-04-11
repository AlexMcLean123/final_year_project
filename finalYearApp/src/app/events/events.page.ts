import { Component, OnInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
import { Icon, icon, marker } from 'leaflet';
import { TheSessionService } from '../service/the-session.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  map: Map;
  sessions: any[] = [];
  events: any[] = [];
  searchText; string;

  private defaultIcon: Icon = icon({
    iconUrl: 'assets/marker-icon2.png',
    shadowUrl: 'assets/marker-shadow.png',
    iconSize: [40, 40], // => random values you have to choose right ones for your case
    iconAnchor: [20, 51],
    popupAnchor: [0, -50]
  });

  constructor(private service: TheSessionService) {

  }



  getSessions() {
    this.service.getSessions().subscribe(res => {
      let sessions = res["sessions"];
      sessions.forEach(session => {
        this.sessions.push(session);
      });
      // console.log(this.sessions[0].latitude);
    })
  }

  getEvents() {
    this.service.getEvents().subscribe(res => {
      let events = res["events"];
      events.forEach(event => {
        this.events.push(event);
      });
      // console.log("HEllO EVENT LAT",this.sessions[0].latitude);
    })
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  ngOnInit() {
    this.getSessions();
    this.getEvents();

  }

}
