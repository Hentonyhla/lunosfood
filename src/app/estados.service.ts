import { Injectable } from '@angular/core';
import { Estados } from './models/estados.model';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable, subscribeOn } from 'rxjs';
const baseUrl = '/api/estados/'

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<Estados[]> {
    return this.http.get<Estados[]>(baseUrl);
  }
  getId(id: any): Observable<Estados> {
    return this.http.get<Estados>(`${baseUrl}/${id}`);
  }
}
