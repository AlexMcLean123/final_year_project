import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tune } from '../model/tune';
import { tap, delay } from 'rxjs/operators';
import { Session } from '../model/Session';

@Injectable({
  providedIn: 'root'
})
export class TheSessionService {


  baseUrl: String;
  jsonAppender: String;
  num35: String;
  num10: String;
  num50: String 

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://thesession.org/';
    this.jsonAppender = '?format=json';
    this.num35 = "&perpage=35"
    this.num10 = "&perpage=10"
    this.num50 = "&perpage=50"

  }

  getTunes(): Observable<Tune[]> {
    var item = 'tunes/new';
    var url = this.baseUrl + item + this.jsonAppender + this.num10;
    return this.http.get<Tune[]>(url).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  getPopTunes(): Observable<Tune[]> {
    var item = 'tunes/popular';
    var url = this.baseUrl + item + this.jsonAppender + this.num35;
    return this.http.get<Tune[]>(url).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  GetIssue(id): Observable<Tune[]> {
    return this.http.get<Tune[]>(this.baseUrl + 'tunes/' + id + this.jsonAppender).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))), delay(1000));
  }

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.baseUrl + 'sessions/new' + this.jsonAppender + this.num50).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  
  getSession(id): Observable<Tune[]> {
    return this.http.get<Tune[]>(this.baseUrl + 'sessions/' + id + this.jsonAppender).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  getEvent(id): Observable<Tune[]> {
    return this.http.get<Tune[]>(this.baseUrl + 'events/' + id + this.jsonAppender).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  getEvents(): Observable<any[]> {
    return this.http.get<Session[]>(this.baseUrl + 'events/new' + this.jsonAppender + this.num50).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  getVideoID(name): Observable<any[]> {
    let nameUri = encodeURI(name);
    console.log(nameUri)
    return this.http.get<any[]>('https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q=' + nameUri + '&type=video&videoDefinition=high&key=AIzaSyAzb2LyeEDe82S-rC5G58-Pc4dUrwmhEhA').pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  getNews(topic): Observable<any[]> {
    let topicUri = encodeURI(topic)
    console.log(topicUri)
    return this.http.get<any[]>('https://gnews.io/api/v3/search?q=' + topic +'&image=required'+ '&token=bb2c0b8b824b77d3e04beb164add122e').pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  getStats(): Observable<any[]>{
    return this.http.get<any[]>('./assets/tunes1.json').pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  
  getEventStats(): Observable<any[]>{
    return this.http.get<any[]>('./assets/events1.json').pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }




}
