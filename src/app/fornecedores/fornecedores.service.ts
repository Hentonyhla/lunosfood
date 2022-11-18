import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Observable, subscribeOn } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fornecedores } from '../models/fornecedores.model';
import { Router } from '@angular/router';
import { Type } from '@angular/compiler';
import { DataTypes } from 'sequelize';
const baseUrl = '/api/fornecedores/'

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {
  

  constructor(private http: HttpClient, public snackBar: MatSnackBar, private router: Router) { }
  getAll(): Observable<Fornecedores[]>{
    return this.http.get<Fornecedores[]>(baseUrl);}
    getId(id: any): Observable<Fornecedores> {
      return this.http.get<Fornecedores>(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
    update(fornecedores: Fornecedores){
      return this.http.put<Fornecedores>(baseUrl + fornecedores.id, fornecedores);
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
          this.router.navigate(['/fornecedores-list']);
        }
      });
    }
    buscaCep(cep:string){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
    }
    buscaReceita(cnpj:string){
      return this.http.jsonp(`https://receitaws.com.br/v1/cnpj/${cnpj}`, 'callback')
    }
}
