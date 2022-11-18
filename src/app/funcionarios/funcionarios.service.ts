import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Observable, subscribeOn } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Funcionarios } from '../models/funcionarios.model';
import { Router } from '@angular/router';
const baseUrl = '/api/funcionarios/'


@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar, private router: Router) { }
  getAll(): Observable<Funcionarios[]>{
    return this.http.get<Funcionarios[]>(baseUrl);}
    getId(id: any): Observable<Funcionarios> {
      return this.http.get<Funcionarios>(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
    update(funcionarios: Funcionarios){
      return this.http.put<Funcionarios>(baseUrl + funcionarios.id, funcionarios);
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
          this.router.navigate(['/funcionarios-list']);
        }
      });
    }
}
