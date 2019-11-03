import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, L } from 'leaflet';
import { Session } from '../model/Session';
import { TheSessionService } from '../service/the-session.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  map: Map;
  sessions: Session[] = [];

  // icon = {
  //   icon: L.icon({
  //     iconSize: [25, 41],
  //     iconAnchor: [13, 0],
  //     // specify the path here
  //     iconUrl: './node_modules/leaflet/dist/images/marker-icon-2x.png',
  //     shadowUrl: './node_modules/leaflet/dist/images/marker-shadow.png'
  //   })
  // };

  constructor(private service: TheSessionService) {

  }

  getSessions() {
    this.service.getSessions().subscribe(res => {
      let sessions = res["sessions"];
      sessions.forEach(session => {
        this.sessions.push(session);
      });
      console.log(this.sessions[0].latitude);
    })
  }

  leafletMap() {


    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([53.381210, -6.5918], 10);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'The Session.org',
    }).addTo(this.map);
    setTimeout(() => {
      this.map.invalidateSize();
    }, 1000);
    for(var counter:number = 0; counter<this.sessions.length; counter++){
      console.log("HELLO")
      marker([this.sessions[counter].latitude, this.sessions[counter].longitude]).addTo(this.map)
        .bindPopup('hello')
        .openPopup()
  }
    this.sessions.forEach(element => {
      console.log("HELLO")
      marker([element.latitude, element.longitude]).addTo(this.map)
        .bindPopup('hello')
        .openPopup()
    });

    // // const marker = L.marker([51.5, -0.09], this.icon).addTo(this.map);
    // marker([53.381210, -6.5918])
    //   .bindPopup('Hello').addTo(this.map)
    //   .openPopup();
   // element.latitude, element.longitude
   
  }

  /** Remove map when we have multiple map object */

  ionViewDidEnter() {
    //this.leafletMap();
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  ngOnInit() {
    this.getSessions();
    this.leafletMap();
  }

}
