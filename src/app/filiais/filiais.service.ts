import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Observable, subscribeOn } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Filiais } from '../models/filiais.model';
import { Router } from '@angular/router';
const baseUrl = '/api/filiais/'

@Injectable({
  providedIn: 'root'
})
export class FiliaisService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar, private router: Router) { }
  getAll(): Observable<Filiais[]>{
    return this.http.get<Filiais[]>(baseUrl);}
    getId(id: any): Observable<Filiais> {
      return this.http.get<Filiais>(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
    update(filiais: Filiais){
      return this.http.put<Filiais>(baseUrl + filiais.id, filiais);
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
          this.router.navigate(['/filiais-list']);
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
