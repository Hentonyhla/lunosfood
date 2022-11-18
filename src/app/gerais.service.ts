import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GeraisService {

  constructor(private http: HttpClient) { }
  buscaCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
  }
  buscaReceita(cnpj: string) {
    return this.http.jsonp(`https://receitaws.com.br/v1/cnpj/${cnpj}`, 'callback')
  }
}
