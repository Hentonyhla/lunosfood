import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Observable, subscribeOn } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aliquotas } from '../models/aliquotas.model';
import { Router } from '@angular/router';
import { Type } from '@angular/compiler';
import { DataTypes } from 'sequelize';
const baseUrl = '/api/aliquotas/'


@Injectable({
  providedIn: 'root'
})

export class AliquotasService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar, private router: Router) { }
  getAll(): Observable<Aliquotas[]>{
    return this.http.get<Aliquotas[]>(baseUrl);}
    getId(id: any): Observable<Aliquotas> {
      return this.http.get<Aliquotas>(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
    update(aliquotas: Aliquotas){
      return this.http.put<Aliquotas>(baseUrl + aliquotas.id, aliquotas);
    }
    // update(id: any, data: any): Observable<any> {
    //   return this.http.put(`${baseUrl}/${id}`, data);
    // }
    delete(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }
    mostrarMensagem(mensagem: string, temErro: boolean){
      this.snackBar.open(mensagem, 'Ok', {
        duration: 2000, 
        verticalPosition: 'top', 
        panelClass: temErro ? 'msg-erro' : 'msg-sucesso',
        
      },).afterDismissed().subscribe(()=>{
        if (temErro === false) {
          this.router.navigate(['/aliquotas-list']);
        }
      });
    }
}
