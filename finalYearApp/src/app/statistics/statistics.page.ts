import { Component, OnInit } from '@angular/core';
import { TheSessionService } from '../service/the-session.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  constructor(private theSessionService: TheSessionService) {

  }



  ngOnInit() {

  }

  display = false;
  displayDo = false
  displayPi = false;

  updateBar() {
    this.display = true;
    if (this.displayDo) {
      this.displayDo = false
    }
    if (this.displayPi) {
      this.displayPi = false
    }
    console.log("clicked bar")
  }

  updateDo() {
    this.displayDo = true
    if (this.display) {
      this.display = false
    }
    if(this.displayPi) {
      this.displayPi = false;
    }
    console.log("clicked do component")
  }

  updatePie() {
    this.displayPi = true;
    if (this.display) {
      this.display = false
    }
    if (this.displayDo) {
      this.displayDo = false
    }
    console.log("clicked polar ")
  }


}

