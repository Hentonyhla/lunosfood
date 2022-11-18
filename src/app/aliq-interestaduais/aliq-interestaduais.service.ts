import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Observable, subscribeOn } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aliquotas_Interestaduais } from '../models/aliquotas-inter.model';
import { Router } from '@angular/router';

const baseUrl = '/api/aliquotas_interestaduais/'

@Injectable({
  providedIn: 'root'
})
export class AliqInterestaduaisService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar, private router: Router) { }
  getAll(): Observable<Aliquotas_Interestaduais[]>{
    return this.http.get<Aliquotas_Interestaduais[]>(baseUrl);}
    getId(id: any): Observable<Aliquotas_Interestaduais> {
      return this.http.get<Aliquotas_Interestaduais>(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
    update(Aliquotas_Interestaduais: Aliquotas_Interestaduais){
      return this.http.put<Aliquotas_Interestaduais>(baseUrl + Aliquotas_Interestaduais.id, Aliquotas_Interestaduais);
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
          this.router.navigate(['/aliquotas-int-list']);
        }
      });
    }
}