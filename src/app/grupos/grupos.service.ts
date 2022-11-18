import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Observable, subscribeOn } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Grupos } from '../models/grupos.model';
import { Router } from '@angular/router';
const baseUrl = '/api/grupos/'

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar, private router: Router) { }
  getAll(): Observable<Grupos[]>{
    return this.http.get<Grupos[]>(baseUrl);}
    getId(id: any): Observable<Grupos> {
      return this.http.get<Grupos>(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
    update(grupos: Grupos){
      return this.http.put<Grupos>(baseUrl + grupos.id, grupos);
    }
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
          this.router.navigate(['/grupos-list']);
        }
      });
    }
}
