import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Word } from '../models/word';


@Injectable({
  providedIn: 'root'
})
export class SignService {
  constructor(private http: HttpClient,private _router:Router) { }
 
  getnumberArray():Observable<Word[]>
  {
    return  this.http.get<Word[]>("api/word/"+2);
  }

  getletterArray():Observable<Word[]>
  {
    return this.http.get<Word[]>("api/word/"+1);
  }
}
