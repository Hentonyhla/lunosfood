import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Ncm } from './models/ncm.model';
@Injectable({
  providedIn: 'root'
})
export class NcmService {
  private readonly API = 'http://localhost:3000/listancm';

  constructor(private http: HttpClient) { }
 
  listNCM(){
    return this.http.get<Ncm[]>(this.API)
    .pipe(
     
    )
  }
}
