import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class TextService {
    constructor(private http: HttpClient,private _router:Router) { }
getLettersText():Observable<Text[]>
{
   return this.http.get<Text[]>("api/Text/"+1);
}
getNumbersText():Observable<Text[]>
{
   return this.http.get<Text[]>("api/Text/"+2);
}

  }