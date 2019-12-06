import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StatisticsPage } from './statistics.page';
import { DoChartComponent } from '../components/do-chart/do-chart.component';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';
import { PolarChartComponent } from '../components/polar-chart/polar-chart.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  StatisticsPage,
  DoChartComponent,
  BarChartComponent,
  PolarChartComponent
],
exports: [BarChartComponent, DoChartComponent]
})
export class StatisticsPageModule {}
