import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Tune} from '../model/tune';
import {tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TheSessionService {

  
  baseUrl: String;
  jsonAppender: String;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://thesession.org/';
    this.jsonAppender = '?format=json';

   }

   getTunes(): Observable<Tune[]> {
     var item = 'tunes/new';
     var url = this.baseUrl+ item + this.jsonAppender;
     return this.http.get<Tune[]>(url).pipe(
       tap(res => console.log('All: ' + JSON.stringify(res))));
   }

  //  console.log('All: ' + JSON.stringify(res)


  //  get(url){
  //    return this.http.get(url).pipe(res => res.json());
  //  }
}
