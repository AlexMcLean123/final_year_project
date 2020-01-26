import { Component, OnInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
import { Icon, icon, marker } from 'leaflet';
import { TheSessionService } from '../service/the-session.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.page.html',
  styleUrls: ['./map-info.page.scss'],
})
export class MapInfoPage implements OnInit {
  map: Map;
  sessions: any;


  private defaultIcon: Icon = icon({
    iconUrl: 'assets/marker-icon2.png',
    shadowUrl: 'assets/marker-shadow.png',
    iconSize: [40, 40], // => random values you have to choose right ones for your case
    iconAnchor: [20, 51],
    popupAnchor: [0, -50]
  });

  constructor(private activatedRoute: ActivatedRoute, private service: TheSessionService) {

  }

  getSession(id) {
    this.service.getSession(id).subscribe(session => {
      this.sessions = session;
      console.log(this.sessions)
    })
  }



  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([this.sessions.latitude, this.sessions.longitude], 15);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'The Session.org',
    }).addTo(this.map);
    setTimeout(() => {
      this.map.invalidateSize();
    }, 1000);
    setTimeout(() => {
      var location = "Theres a session at " + this.sessions.venue.name + " in " + this.sessions.area.name + ", " + this.sessions.country.name + "!";
      marker([this.sessions.latitude, this.sessions.longitude], { icon: this.defaultIcon }).addTo(this.map)
        .bindPopup(location)
        .openPopup()
      console.log("array", this.sessions)
    }, 1000)
  }

  ionViewDidEnter() {
    this.leafletMap();
  }

  ionViewWillLeave() {
    this.map.remove();
  }


  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getSession(id);
  }

}
