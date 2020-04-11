import { Component, OnInit } from '@angular/core';
import { TheSessionService } from 'src/app/service/the-session.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-do-chart',
  templateUrl: './do-chart.component.html',
  styleUrls: ['./do-chart.component.scss'],
})
export class DoChartComponent implements OnInit {
  chart = [];
  types: any[] = [];
  noJigs;
  noReel;
  noSlipJig;
  noHornPipe;
  noWaltz;
  noPolka;
  noSlide;
  noMarch;
  noBarndance;
  noThreeTwo;
  noMazurka;
  noStrathspey;

  constructor(private theSessionService: TheSessionService) { }

  getStats() {
    this.theSessionService.getStats().subscribe(res => {
      res.forEach(tune => {
        this.types.push(tune);
      });
      console.log(this.types);
    }
    )
  }

  getCount(type) {
    var count = 0;
    var id = 0;
    for (var i = 1; i < this.types.length; i++) {
      id = this.types[i].tune;
      if (this.types[i].type == type && id != this.types[i - 1].tune) {
        count++;
      }
    }
    console.log(count, ":", type)
    return count;
  }


  ngOnInit() {
    this.getStats();

    setTimeout(() => {
      this.noReel = this.getCount("reel");
      this.noJigs = this.getCount("jig")
      this.noSlipJig = this.getCount("slip jig")
      this.noHornPipe = this.getCount("hornpipe")
      this.noWaltz = this.getCount("waltz")
      this.noPolka = this.getCount("polka")
      this.noSlide = this.getCount("slide")
      this.noMarch = this.getCount("march")
      this.noBarndance = this.getCount("barndance")
      this.noThreeTwo = this.getCount("three-two")
      this.noMazurka = this.getCount("mazurka")
      this.noStrathspey = this.getCount("strathspey")
    }, 2500)

    setTimeout(() => {
      new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
          labels: [
            "Jigs",
            "Reels",
            "Slip Jigs",
            "Horn Pipes",
            "Waltz'",
            "Polkas",
            "Slides",
            "Marchs",
            "Barndances",
            "Three-Twos",
            "Mazurkas",
            "Strathspeys"

          ],
          datasets: [
            {
              backgroundColor: [
                "#bdeb34",
                "#93eb34",
                "#7aeb34",
                "#5feb34",
                "#40eb34",
                "#34eb49",
                "#34eb65",
                "#34eb7d",
                "#34eba2",
                "#34ebba",
                "#34ebd6",
                "#34d6eb"

              ],
              data: [
                this.noJigs,
                this.noReel,
                this.noSlipJig,
                this.noHornPipe,
                this.noWaltz,
                this.noPolka,
                this.noSlide,
                this.noMarch,
                this.noBarndance,
                this.noThreeTwo,
                this.noMazurka,
                this.noStrathspey
              ]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Type Composition of tunes'
          }
        }
      });
    }, 3000)

  }
}