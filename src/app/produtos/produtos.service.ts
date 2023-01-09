import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produtos } from '../models/produtos.models';
const baseUrl = '/api/produtos/'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }

  getAll(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(baseUrl);
  }
  getId(id: any): Observable<Produtos> {
    return this.http.get<Produtos>(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(produtos: Produtos) {
    return this.http.put<Produtos>(baseUrl + produtos.id, produtos);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  mostrarMensagem(mensagem: string, temErro: boolean) {
    this.snackBar.open(mensagem, 'Ok', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: temErro ? 'msg-erro' : 'msg-sucesso',
    },);
  }
}
