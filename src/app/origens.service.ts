import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Origens } from './models/origens.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
const baseUrl = '/api/origens/'

@Injectable({
  providedIn: 'root'
})
export class OrigensService {

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<Origens[]> {
    return this.http.get<Origens[]>(baseUrl);
  }
  getId(id: any): Observable<Origens> {
    return this.http.get<Origens>(`${baseUrl}/${id}`);
  }

}


