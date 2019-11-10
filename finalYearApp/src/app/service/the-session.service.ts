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
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://thesession.org/';
    this.jsonAppender = '?format=json';
    this.num35 = "&perpage=35"
    this.num10 = "&perpage=10"
  }

  getTunes(): Observable<Tune[]> {
    var item = 'tunes/new';
    var url = this.baseUrl + item + this.jsonAppender+this.num35;
    return this.http.get<Tune[]>(url).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  getPopTunes(): Observable<Tune[]> {
    var item = 'tunes/popular';
    var url = this.baseUrl + item + this.jsonAppender+this.num35;
    return this.http.get<Tune[]>(url).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  // getTune(id): Observable<Tune[]> {
  //   var item = 'tunes/' + id;
  //   var url = this.baseUrl + item + this.jsonAppender;
  //   return this.http.get<Tune[]>(url).pipe(
  //     tap(res => console.log('All: ' + JSON.stringify(res))));
  // }

  GetIssue(id): Observable<Tune[]> {
    return this.http.get<Tune[]>(this.baseUrl +'tunes/'+ id + this.jsonAppender).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))),delay(1000));
  }

  // getDetails(id) {
  //   return this.http.get(`${this.baseUrl}${'tunes/'}${id}${this.jsonAppender}`);
  // }

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.baseUrl+'sessions/new'+ this.jsonAppender+this.num35).pipe(
      tap(res=> console.log('All: ' + JSON.stringify(res))));
  }

  getEvents(): Observable<any[]> {
    return this.http.get<Session[]>(this.baseUrl+'events/new'+ this.jsonAppender+this.num35).pipe(
      tap(res=> console.log('All: ' + JSON.stringify(res))));
  }

  getVideoID(name): Observable<any[]> {
    let nameUri= encodeURI(name);
    console.log(nameUri)
    return this.http.get<any[]>('https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q='+ nameUri+'&type=video&videoDefinition=high&key=AIzaSyAzb2LyeEDe82S-rC5G58-Pc4dUrwmhEhA').pipe(
      tap(res=> console.log('All: ' + JSON.stringify(res))));
  }




}
