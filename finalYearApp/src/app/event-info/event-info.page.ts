import { Component, OnInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
import { Icon, icon, marker } from 'leaflet';
import { TheSessionService } from '../service/the-session.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.page.html',
  styleUrls: ['./event-info.page.scss'],
})
export class EventInfoPage implements OnInit {
  map: Map;
  events: any;


  private defaultIcon: Icon = icon({
    iconUrl: 'assets/marker-icon2.png',
    shadowUrl: 'assets/marker-shadow.png',
    iconSize: [40, 40], // => random values you have to choose right ones for your case
    iconAnchor: [20, 51],
    popupAnchor: [0, -50]
  });

  constructor(private activatedRoute: ActivatedRoute, private service: TheSessionService) {

  }


  getEvent(id) {
    this.service.getEvent(id).subscribe(event => {
      this.events = event;
      console.log(this.events)
    })
  }


  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([this.events.latitude, this.events.longitude], 15);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'The Session.org',
    }).addTo(this.map);
    setTimeout(() => {
      this.map.invalidateSize();
    }, 1000);
    setTimeout(() => {
      var location = "Theres an event at " + this.events.venue.name + " in " + this.events.area.name + ", " + this.events.country.name + "!";
      marker([this.events.latitude, this.events.longitude], { icon: this.defaultIcon }).addTo(this.map)
        .bindPopup(location)
        .openPopup()
      console.log("array", this.events)
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
    this.getEvent(id);
  }

}
