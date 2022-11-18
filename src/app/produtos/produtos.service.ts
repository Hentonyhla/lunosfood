import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produtos } from '../models/produtos.models';
const baseUrl = '/api/produtos'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }
  getAll(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(baseUrl);}
    get(id: any): Observable<Produtos> {
      return this.http.get<Produtos>(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
    update(id: any, data: any): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
    }
    delete(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }
    deleteAll(): Observable<any> {
      return this.http.delete(baseUrl);
    }
    findByName(nome: any): Observable<Produtos[]> {
      return this.http.get<Produtos[]>(`${baseUrl}?nome=${nome}`);
    }
    mostrarMensagem(mensagem: string, temErro: boolean){
      this.snackBar.open(mensagem, 'Ok', {
        duration: 3000, 
        verticalPosition: 'top', 
        panelClass: temErro ? 'msg-erro' : 'msg-sucesso',
      },);
    }
}
