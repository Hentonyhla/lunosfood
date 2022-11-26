import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Csosns } from './models/csosns.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
const baseUrl = '/api/csosns/'

@Injectable({
  providedIn: 'root'
})
export class CsosnsService {

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<Csosns[]> {
    return this.http.get<Csosns[]>(baseUrl);
  }
  getId(id: any): Observable<Csosns> {
    return this.http.get<Csosns>(`${baseUrl}/${id}`);
  }

}


