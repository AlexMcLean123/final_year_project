import { Component, OnInit } from '@angular/core';
import { TheSessionService } from 'src/app/service/the-session.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.scss'],
})
export class PolarChartComponent implements OnInit {
  events: any[] = [];
  eventsIreland: any[] = [];

  ireland;
  australia;
  usa;
  england;
  scotland;
  nIreland;
  canada;
  germany;
  france;
  norway;
  finland;
  switzerland;
  japan;
  wales;
  austria;
  hungary;
  belgium;
  italy;
  nZealand;
  russianFederation;
  vietnam;
  thailand;
  argentina;
  spain;
  denmark;
  puertoRico;
  czechRepublic;
  mexico;
  netherlands;
  sweden;
  israel;
  korea;

  constructor(private theSessionService: TheSessionService) { }

  getStats() {
    this.theSessionService.getEventStats().subscribe(res => {
      res.forEach(event => {
        this.events.push(event);
        if(event.country == "Ireland")
        this.eventsIreland.push(event)
      });
      console.log(this.events);
      console.log(this.eventsIreland)
    }
    )
  }

  getCount(country) {
    console.log("hello")
    var count = 0;
    for (var i = 0; i < this.events.length; i++) {
      console.log(this.events[i].country)
      if (this.events[i].country == country) {
        count++;
      }
    }
    return count;
  }


  ngOnInit() {
    this.getStats();
    setTimeout(() => {
      this.ireland = this.getCount("Ireland");
      this.australia = this.getCount("Australia")
      this.usa = this.getCount("USA")
      this.england = this.getCount("England")
      this.scotland = this.getCount("Scotland")
      this.nIreland = this.getCount("Northern Ireland")
      this.canada = this.getCount("Canada")
      this.germany = this.getCount("Germany")
      this.france = this.getCount("France")
      this.norway = this.getCount("Norway")
      this.finland = this.getCount("Finland")
      this.switzerland = this.getCount("Switzerland")
      this.japan = this.getCount("Japan")
      this.wales = this.getCount("Wales")
      this.austria = this.getCount("Austria")
      this.hungary = this.getCount("Hungary")
      this.belgium = this.getCount("Belgium")
      this.italy = this.getCount("Italy")
      this.nZealand = this.getCount("New Zealand")
      this.russianFederation = this.getCount("Russian Fedaration (European Part)")
      this.vietnam = this.getCount("Viet nam")
      this.thailand = this.getCount("Thailand")
      this.argentina = this.getCount("Argentina")
      this.spain = this.getCount("Spain")
      this.denmark = this.getCount("Denmark")
      this.puertoRico = this.getCount("Puerto Rico")
      this.czechRepublic = this.getCount("Czech Republic")
      this.mexico = this.getCount("Mexico")
      this.netherlands = this.getCount("Netherlands")
      this.sweden = this.getCount("Sweden")
      this.israel = this.getCount("Israel")
      this.korea = this.getCount("Korea - Republic")
    }, 2500)

    setTimeout(() => {
      new Chart(document.getElementById("radar-chart"), {
        type: 'pie',
        data: {
          labels: [
            "Ireland",
            "Australia",
            "USA",
            "England",
            "Scotland'",
            "Northern Ireland",
            "Canada",
            "Germany",
            "France",
            "Norway",
            "Finland",
            "Switzerland",
            "Japan",
            "Wales",
            "Austria",
            "Hungary",
            "Belgium'",
            "Italy",
            "New Zealand",
            "Russian Fedaration (European Part)",
            "Vietnam",
            "Thailand",
            "Argentina",
            "Spain",
            "Denmark",
            "Puerto Rico",
            "Czech Republic",
            "Mexico",
            "Netherlands",
            "Sweden",
            "Israel",
            "Korea"
          ],
          datasets: [
            {
              label: "Key",
              backgroundColor: [
                "#800000",
                "#FF7F50",
                "#CD5C5C",
                "#FFA07A",
                "#FFD700",
                "#DAA520",
                "#EEE8AA",
                "#808000",
                "#9ACD32",
                "#7CFC00",
                "#006400",
                "#00FF00",
                "#98FB98",
                "#00FF7F",
                "#00FFFF",
                "#00CED1",
                "#7FFFD4",
                "#4682B4",
                "#1E90FF",
                "#191970",
                "#4169E1",
                "#6A5ACD",
                "#EE82EE",
                "#FFC0CB",
                "#FFE4C4",
                "#D2691E",
                "#FDF5E6",
                "#B0C4DE",
                "#F0FFF0",
                "#87CEEB",
                "#DDA0DD",
                "#DA70D6",
                "#FFEBCD",
                "#ffc738", "#d4ff38", "#66ff38", "#38ff9f",
                "#38ffee", "#38afff", "#384fff", "#8138ff", "#d138ff",

              ],
              borderWidth: 0,
              data: [
                this.ireland, this.australia, this.usa, this.england, this.scotland, this.nIreland,
                this.canada, this.germany, this.france, this.norway, this.finland,
                this.switzerland, this.japan, this.wales, this.austria, this.hungary, this.belgium,
                this.italy, this.nZealand, this.russianFederation, this.vietnam, this.thailand,
                this.argentina, this.spain, this.denmark, this.puertoRico, this.czechRepublic, this.mexico,
                this.netherlands, this.sweden, this.israel, this.korea
              ]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Type Distributuon of tunes'
          }
        }
      });
    }, 3000)

  }

}
