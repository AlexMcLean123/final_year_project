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
  events2006 = 0;
  events2007 = 0;
  events2008 = 0;
  events2009 = 0;
  events2010 = 0;
  events2011 = 0;
  events2012 = 0;
  events2013 = 0;
  events2014 = 0;
  events2015 = 0;
  events2016 = 0;
  events2017 = 0;
  events2018 = 0;
  events2019 = 0;
  events2020 = 0;

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

  Galway;
  Leitrim;
  Mayo;
  Roscommon;
  Sligo;
  Carlow;
  Dublin;
  Kildare;
  Kilkenny;
  Laois;
  Longford;
  Louth;
  Meath;
  Offaly;
  Westmeath;
  Wexford;
  Wicklow;
  Clare;
  Cork;
  Kerry;
  Limerick;
  Tipperary;
  Waterford;
  Cavan;
  Donegal;
  Monaghan;

  constructor(private theSessionService: TheSessionService) { }

  getStats() {
    this.theSessionService.getEventStats().subscribe(res => {
      res.forEach(event => {
        this.events.push(event);
        if (event.country == "Ireland")
          this.eventsIreland.push(event)
      });
    })
  }

  getYearCount(year) {
    var count = 0;
    for (var i = 0; i < this.events.length; i++) {
      if (this.events[i].dtstart.match(year + "-*-* *:*:*")) {
        count++;
      }
    }
    return count;
  }

  getCount(country) {
    var count = 0;
    for (var i = 0; i < this.events.length; i++) {
      if (this.events[i].country == country) {
        count++;
      }
    }
    return count;
  }

  countCounties(county) {
    // console.log("this is eventsIreland from getCounties" + this.eventsIreland)
    var count = 0;
    for (var i = 0; i < this.eventsIreland.length; i++) {
      if (this.eventsIreland[i].area == county) {
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

      this.Galway = this.countCounties("Galway")
      this.Leitrim = this.countCounties("Leitrim")
      this.Mayo = this.countCounties("Mayo")
      this.Roscommon = this.countCounties("Roscommon")
      this.Sligo = this.countCounties("Sligo")
      this.Carlow = this.countCounties("Carlow")
      this.Dublin = this.countCounties("Dublin")
      this.Kildare = this.countCounties("Kildare")
      this.Kilkenny = this.countCounties("Kilkenny")
      this.Laois = this.countCounties("Laois")
      this.Longford = this.countCounties("Longford")
      this.Louth = this.countCounties("Louth")
      this.Meath = this.countCounties("Meath")
      this.Offaly = this.countCounties("Offaly")
      this.Westmeath = this.countCounties("Westmeath")
      this.Wexford = this.countCounties("Wexford")
      this.Wicklow = this.countCounties("Wicklow")
      this.Clare = this.countCounties("Clare")
      this.Cork = this.countCounties("Cork")
      this.Kerry = this.countCounties("Kerry")
      this.Limerick = this.countCounties("Limerick")
      this.Tipperary = this.countCounties("Tipperary")
      this.Waterford = this.countCounties("Waterford")
      this.Cavan = this.countCounties("Cavan")
      this.Donegal = this.countCounties("Donegal")
      this.Monaghan = this.countCounties("Monaghan")

      this.events2006 = this.getYearCount("2006")
      this.events2007 = this.getYearCount("2007")
      this.events2008 = this.getYearCount("2008")
      this.events2009 = this.getYearCount("2009")
      this.events2010 = this.getYearCount("2010")
      this.events2011 = this.getYearCount("2011")
      this.events2012 = this.getYearCount("2012")
      this.events2013 = this.getYearCount("2013")
      this.events2014 = this.getYearCount("2014")
      this.events2015 = this.getYearCount("2015")
      this.events2016 = this.getYearCount("2016")
      this.events2017 = this.getYearCount("2017")
      this.events2018 = this.getYearCount("2018")
      this.events2019 = this.getYearCount("2019")
      this.events2020 = this.getYearCount("2020")
    }, 2500)

    setTimeout(() => {
      new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [
            "Galway",
            "Leitrim",
            "Mayo",
            "Roscommon",
            "Sligo",
            "Carlow",
            "Dublin",
            "Kildare",
            "Kilkenny",
            "Laois",
            "Longford",
            "Louth",
            "Meath",
            "Offaly",
            "Westmeath",
            "Wexford",
            "Wicklow",
            "Clare",
            "Cork",
            "Kerry",
            "Limerick",
            "Tipperary",
            "Waterford",
            "Cavan",
            "Donegal",
            "Monaghan"
          ],
          datasets: [
            {
              label: "Events",
              borderColor: [
                "#3e95cd"
              ],
              fill: false,
              borderWidth: 0,
              data: [
                this.Galway,
                this.Leitrim,
                this.Mayo,
                this.Roscommon,
                this.Sligo,
                this.Carlow,
                this.Dublin,
                this.Kildare,
                this.Kilkenny,
                this.Laois,
                this.Longford,
                this.Louth,
                this.Meath,
                this.Offaly,
                this.Westmeath,
                this.Wexford,
                this.Wicklow,
                this.Clare,
                this.Cork,
                this.Kerry,
                this.Limerick,
                this.Tipperary,
                this.Waterford,
                this.Cavan,
                this.Donegal,
                this.Monaghan
              ]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Event distribution in irish counties'
          }
        }
      });

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
            text: "Event Distribution all over the world"
          }
        }
      });

      new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: [
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
          ],
          datasets: [
            {
              label: "Events",
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

              ],
              borderWidth: 0,
              data: [
                this.events2006,
                this.events2007,
                this.events2008,
                this.events2009,
                this.events2010,
                this.events2011,
                this.events2012,
                this.events2013,
                this.events2014,
                this.events2015,
                this.events2016,
                this.events2017,
                this.events2018,
                this.events2019,
                this.events2020
              ]
            }
          ]
        },
        options: {
          maintainAspectRatio:false,
          legend: { display: false },
          title: {
            display: true,
            text: 'Event Distribution per year'
          }
        }
      });

    }, 3000)

  }

}
