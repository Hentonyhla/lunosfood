import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produtos } from 'src/app/models/produtos.models';
import { Composicoes } from 'src/app/models/composicoes.model';
import { Estoques } from 'src/app/models/estoques.model';
import { GeraisService } from 'src/app/gerais.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-produtos-novo',
  templateUrl: './produtos-novo.component.html',
  styleUrls: ['./produtos-novo.component.css']
})
export class ProdutosNovoComponent implements OnInit {

  formulario!: FormGroup;
  produtos!: Produtos;
  constructor(private produtosService: ProdutosService, private geraisService: GeraisService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }
  inicializarFormulario() {
    this.formulario = this.formBuilder.group({

      nome: new FormControl(''),
      descricao: new FormControl(''),
      cst: new FormControl(''),
      codigoNCM: new FormControl(''),
      aliquota: new FormControl(''),
      cest: new FormControl(''),
      origem: new FormControl(''),
      csosn: new FormControl(''),
      unidade: new FormControl(''),
      observacao: new FormControl(''),
      codigo_barras: new FormControl(''),
      tipo: new FormControl(''),
      ativo: new FormControl(''),
      id_fornecedor: new FormControl(''),
      id_grupo: new FormControl(''),
      filial: new FormControl(''),
      preco_venda: new FormControl(''),
      preco_venda_2: new FormControl(''),
      preco_compra: new FormControl(''),
      preco_custo: new FormControl(''),
      preco_custo_medio: new FormControl(''),
      preco_custo_venda: new FormControl(''),
      preco_transferencias: new FormControl(''),
      estoque_atual: new FormControl(''),
      estoque_maximo: new FormControl(''),
      id_produto: new FormControl(''),
      name: new FormControl(''),
      valor: new FormControl(''),
      quantidade: new FormControl(''),

    });

  }
  salvar() {

    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return
    }
    this.produtosService.create(this.formulario.value)
      .subscribe(
        result => this.produtosService.mostrarMensagem('Dados gravados com sucesso!', false),

        erro => {
          this.produtosService.mostrarMensagem('Falha ao gravar dados!', true);
          console.error(erro)
        }
      )
      console.log(this.produtosService)
  }
}