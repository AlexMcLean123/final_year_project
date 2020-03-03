import { Component, OnInit } from '@angular/core';
import { TheSessionService } from '../service/the-session.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  news: any[] = [];
  constructor(private service: TheSessionService) {

  }

  getNews(topic) {
    this.service.getNews(topic).subscribe(news => {
      let articles = news["articles"];
      articles.forEach(article => {
        this.news.push(article)
      })
      console.log(this.news)
    })
  }


  ngOnInit() {
    let topic = "traditional irish music"
    this.getNews(topic)
  }

}
