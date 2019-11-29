
import { Component, OnInit } from '@angular/core';
import { TheSessionService } from '../service/the-session.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  chart = [];
  keys: any[] = [];
  constructor(private theSessionService: TheSessionService) {

  }

  getTunes() {
    this.theSessionService.getTunes().subscribe(res => {
      let settings = res["settings"];
      settings.forEach(tune => {
        this.keys.push(tune);
      });
      console.log("the keys", this.keys);
    }

    )
  }

  ngOnInit() {

    new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: ["Dmajor", "Dmixolydian", "Amajor", "Gmajor", "Adorian", "Edorian", "Emajor",
                 "Fdorian", "Eminor", "Dminor", "Bminor", "Aminor", "Cmajor", "Gminor"],
        datasets: [
          {
            label: "Key",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [13, 1, 2, 13, 1, 4, 1, 1, 5 , 1, 2, 4, 1, 1]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Key Distributuon of new tunes'
        }
      }
    });
  }
}