import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'
import { Observable, subscribeOn } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clientes } from '../models/clientes.model';
import { Router } from '@angular/router';
const baseUrl = '/api/clientes/'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient, public snackBar: MatSnackBar, private router: Router) { }
  getAll(): Observable<Clientes[]>{
    return this.http.get<Clientes[]>(baseUrl);}
    getId(id: any): Observable<Clientes> {
      return this.http.get<Clientes>(`${baseUrl}/${id}`);
    }
    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }
    update(clientes: Clientes){
      return this.http.put<Clientes>(baseUrl + clientes.id, clientes);
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
          this.router.navigate(['/clientes-list']);
        }
      });
    }
}
