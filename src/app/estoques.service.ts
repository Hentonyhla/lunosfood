import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Estoques } from './models/estoques.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
const baseUrl = '/api/estoques/'

@Injectable({
  providedIn: 'root'
})
export class EstoquesService {

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<Estoques[]> {
    return this.http.get<Estoques[]>(baseUrl);
  }
  getId(id: any): Observable<Estoques> {
    return this.http.get<Estoques>(`${baseUrl}/${id}`);
  }

}
