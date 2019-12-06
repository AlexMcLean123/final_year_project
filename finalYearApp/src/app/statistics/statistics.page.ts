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
  updateBar(){
     this.display = !this.display;
     if(this.displayDo){
       this.displayDo = !this.displayDo
     }
     console.log("clicked")
  }

  updateDo(){
    this.displayDo = !this.displayDo;
    if(this.display){
        this.display = !this.display
    }
    console.log("clicked")
 }


  }

