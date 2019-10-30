import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;

  text: string;
  map: any;
  constructor() {
    this.text = "hello World"
  }

  initMap() {
    let coords = new google.maps.LatLng(45, 100);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }


  ngAfterContentI() {
    this.initMap();
  }

  ngOnInit() {

  }



}


