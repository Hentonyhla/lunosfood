import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produtos } from 'src/app/models/produtos.models';

@Component({
  selector: 'app-produtos-novo',
  templateUrl: './produtos-novo.component.html',
  styleUrls: ['./produtos-novo.component.css']
})
export class ProdutosNovoComponent implements OnInit {
  produtos: Produtos = {
    nome: '',
    preco: '',
    descricao: '',
  };
  submitted = false;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
  }
  saveProdutos(): void {
    const data = {
      nome: this.produtos.nome,
      preco: this.produtos.preco,
      descricao: this.produtos.descricao
    };
    this.produtosService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newProdutos(): void {
    this.submitted = false;
    this.produtos = {
      nome: '',
      preco: '',
      descricao: ''
    };
  }

}
