import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, L } from 'leaflet';
import { Icon, icon, Marker, marker } from 'leaflet';
import { Session } from '../model/Session';
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


  private defaultIcon: Icon = icon({
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png',
    iconSize: [41, 51], // => random values you have to choose right ones for your case
    iconAnchor: [20, 51],
    popupAnchor: [0, -40]
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


  leafletMap() {
    this.map = new Map('mapId').setView([53.381210, -6.5918], 2);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'The Session.org',
    }).addTo(this.map);
    setTimeout(() => {
      this.map.invalidateSize();
    }, 2000);

    // setTimeout(() =>{
    //   this.sessions.forEach(element => {
    //     var location = "Theres a session at " + element.venue.name + " in " + element.area.name + ", " + element.country.name + "!";
    //     marker([element.latitude, element.longitude], {icon: this.defaultIcon}).addTo(this.map)
    //       .bindPopup(location)
    //       .openPopup()
    //   });
    console.log("array", this.sessions)
    console.log("length", this.sessions.length)
    // }, 1000)

  }

  onClickSession() {
    this.map.remove()
    this.leafletMap()
    console.log("session clicked")
    this.sessions.forEach(element => {
      var location = "Theres a session at " + element.venue.name + " in " + element.area.name + ", " + element.country.name + "!";
      marker([element.latitude, element.longitude], { icon: this.defaultIcon }).addTo(this.map)
        .bindPopup(location)
        .openPopup()
    });
  }

  onClickEvent() {
    this.map.remove()
    this.leafletMap()
    console.log("Event clicked")
    this.events.forEach(element => {
      var location = "Theres an event on at " + element.venue.name + " in " + element.area.name + ", " + element.country.name + "!";
      marker([element.latitude, element.longitude], { icon: this.defaultIcon }).addTo(this.map)
        .bindPopup(location)
        .openPopup()
    });
  }

  /** Remove map when we have multiple map object */

  ionViewDidEnter() {
    // this.getSessions();
    this.leafletMap();
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  ngOnInit() {
    this.getSessions();
    this.getEvents();

  }

}
