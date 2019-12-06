import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoChartComponent } from './components/do-chart/do-chart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'tunes', loadChildren: './tunes/tunes.module#TunesPageModule' },
  { path: 'recordings', loadChildren: './recordings/recordings.module#RecordingsPageModule' },
  { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'tune-info/:id', loadChildren: './tune-info/tune-info.module#TuneInfoPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  {path: 'bar-chart', component: BarChartComponent },
  {path: 'do-chart', component: DoChartComponent }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
