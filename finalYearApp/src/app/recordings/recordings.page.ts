import { Component, OnInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
import { Icon, icon, marker } from 'leaflet';
import { TheSessionService } from '../service/the-session.service';
import 'leaflet.heat/dist/leaflet-heat.js'
import * as L from 'leaflet';

@Component({
  selector: 'app-recordings',
  templateUrl: './recordings.page.html',
  styleUrls: ['./recordings.page.scss'],
})
export class RecordingsPage implements OnInit {

  map: Map;
  eventsIreland:  [] = [];

  constructor(private theSessionService: TheSessionService) { }
  
  getStats() {
    this.theSessionService.getEventStats().subscribe(res => {
      res.forEach(event => {
        if(event.country == "Ireland")
        this.eventsIreland.push(event)
      });
      console.log(this.eventsIreland)
    }
    )
  }

  leafletMap() {
    this.map = new Map('mapId').setView([53.381210, -6.5918], 8);
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'The Session.org',
    }).addTo(this.map);
    setTimeout(() => {
      this.map.invalidateSize();
      // let addresPoints = this.eventsIreland.map(function (p) {return [p[0].latitude, p[0].longitude]})
      // console.log("hellO", addresPoints)
      // const heat = L.heatLayer([53.381210, -6.5918]).addTo(this.map)
    }, 2000);
   
  }
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getStats();
    this.leafletMap();
  }

}
