import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TheSessionService } from 'src/app/service/the-session.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  constructor(private theSessionService: TheSessionService) { }

  keys: any[] = [];
  Dmajor;
  Fmajor;
  Dmixolydian;
  Amixolydian;
  Gmixolydian;
  Bmixolydian;
  Amajor;
  Gmajor;
  Adorian;
  Edorian;
  Emajor;
  Fdorian;
  Eminor;
  Dminor;
  Bminor;
  Aminor;
  Cmajor;
  Gminor;

  getStats() {
    this.theSessionService.getStats().subscribe(res => {
      res.forEach(tune => {
        this.keys.push(tune);
      });
      console.log(this.keys);
    }
    )
  }

  getCount(type) {
    var count = 0;
    for (var i = 0; i < this.keys.length; i++) {
      if (this.keys[i].mode == type) {
        count++;
      }
    }
    console.log(count, ":", type)
    return count;
  }


  ngOnInit() {
    this.getStats();
    setTimeout(() => {
      this.Dmajor = this.getCount("Dmajor")
      this.Gmajor = this.getCount("Gmajor")
      this.Amajor = this.getCount("Amajor")
      this.Emajor = this.getCount("Emajor")
      this.Cmajor = this.getCount("Cmajor")
      this.Fmajor = this.getCount("Fmajor")
      this.Bmixolydian = this.getCount("Bmixolydian")
      this.Dmixolydian = this.getCount("Dmixolydian")
      this.Amixolydian = this.getCount("Amixolydian")
      this.Adorian = this.getCount("Adorian")
      this.Edorian = this.getCount("Edorian")
      this.Fdorian = this.getCount("Fdorian")
      this.Eminor = this.getCount("Eminor")
      this.Dminor = this.getCount("Dminor")
      this.Bminor = this.getCount("Bminor")
      this.Aminor = this.getCount("Aminor")
      this.Gminor = this.getCount("Gminor")
    }, 2500)

    setTimeout(() => {
      new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: [
            "Dmajor",
            "Fmajor",
            "Dmixolydian",
            "Amixolydian",
            "Gmixolydian",
            "Bmixolydian",
            "Amajor",
            "Gmajor",
            "Adorian",
            "Edorian",
            "Emajor",
            "Fdorian",
            "Eminor",
            "Dminor",
            "Bminor",
            "Aminor",
            "Cmajor",
            "Gminor"
          ],
          datasets: [
            {
              label: "Key",
              backgroundColor: [
                "#34eb5c",
                "#34eb89",
                "#34eba2",
                "#34ebb4",
                "#34ebc6",
                "#34ebdc",
                "#34e5eb",
                "#34cdeb",
                "#34b7eb",
                "#3499eb",
                "#3489eb",
                "#347deb",
                "#346beb",
                "#3459eb",
                "#344ceb",
                "#3437eb",
                "#4c34eb",
                "#5634eb",
                "#6234eb"
              ],
              data: [
                this.Dmajor,
                this.Gmajor,
                this.Amajor,
                this.Emajor,
                this.Cmajor,
                this.Fmajor,
                this.Bmixolydian,
                this.Dmixolydian,
                this.Amixolydian,
                this.Adorian,
                this.Edorian,
                this.Fdorian,
                this.Eminor,
                this.Dminor,
                this.Bminor,
                this.Aminor,
                this.Cmajor,
                this.Gminor
              ]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Key Distributuon of tunes'
          }
        }
      });
    }, 3000)
  }


}
