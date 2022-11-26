import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produtos } from 'src/app/models/produtos.models';
import { Composicoes } from 'src/app/models/composicoes.model';
import { Estoques } from 'src/app/models/estoques.model';
import { Origens } from 'src/app/models/origens.model';
import { OrigensService } from 'src/app/origens.service';
import { FornecedoresService } from 'src/app/fornecedores/fornecedores.service';
import { Fornecedores } from 'src/app/models/fornecedores.model';
import { Filiais } from 'src/app/models/filiais.model';
import { GeraisService } from 'src/app/gerais.service';
import { FiliaisService } from 'src/app/filiais/filiais.service';
import { Grupos } from 'src/app/models/grupos.model';
import { GruposService } from 'src/app/grupos/grupos.service';
import { CsosnsService } from 'src/app/csosns.service';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Csosns } from 'src/app/models/csosns.model';
import { Ncm } from 'src/app/models/ncm.model';
import { NcmService } from 'src/app/ncm.service';
import { Aliquotas } from 'src/app/models/aliquotas.model';
import { AliquotasService } from 'src/app/aliquotas/aliquotas.service';

@Component({
  selector: 'app-produtos-novo',
  templateUrl: './produtos-novo.component.html',
  styleUrls: ['./produtos-novo.component.css']
})
export class ProdutosNovoComponent implements OnInit {

  formulario!: FormGroup;
  produtos!: Produtos;
  grupos: Grupos[] =[]
  composicoes!: FormArray;
  filiais!: Filiais[];
  aliquotas: Aliquotas[] = [];
  razao_social!: string;
  codigo_csosn!: number;
  ncm: Ncm[] = [];
  csosns!: Csosns[];
  origens: Origens[] = [];
  Descricao: any;
  fornecedores: Fornecedores[] = [];

  constructor(private produtosService: ProdutosService,
    private geraisService: GeraisService,
    private filiaisService: FiliaisService,
    private formBuilder: FormBuilder,
    private csosnsService: CsosnsService,
    private fornecedoresService: FornecedoresService,
    private gruposService: GruposService,
    private origensService: OrigensService,
    private aliquotasService: AliquotasService,
    private ncmService: NcmService) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.filiaisService.getAll().subscribe(data => this.filiais = data);
    this.fornecedoresService.getAll().subscribe(data => this.fornecedores = data);
    this.csosnsService.getAll().subscribe(data => this.csosns = data);
    this.gruposService.getAll().subscribe(data => this.grupos = data);
    this.origensService.getAll().subscribe(data => this.origens = data);
    this.aliquotasService.getAll().subscribe(data => this.aliquotas = data);

  }

  Pesquisa() {
    this.ncmService.listNCM().subscribe(data => this.ncm = data);
  }
  Search() {
    if (this.Descricao == "") {
      this.Pesquisa();
    } else {
      this.ncm = this.ncm.filter(res => {
        return res.Descricao.toLocaleLowerCase().match(this.Descricao.toLocaleLowerCase());
      })
    }
  }
  inicializarFormulario() {
    this.formulario = this.formBuilder.group({

      nome: new FormControl(''),
      descricao: new FormControl(''),
      cst: new FormControl(''),
      codigoNcm: new FormControl(''),
      aliquota: new FormControl(''),
      cest: new FormControl(''),
      origem: new FormControl(''),
      csosn: new FormControl(''),
      unidade: new FormControl(''),
      observacao: new FormControl(''),
      codigo_barras: new FormControl(''),
      tipo: new FormControl(''),
      ativo: new FormControl(''),
      id_fornecedor: new FormControl('', Validators.required),
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
      estoque_max: new FormControl(''),
      estoque_min: new FormControl(''),
      Descricao: new FormControl(''),
      composicoes: new FormArray([

      ]),
      name: new FormControl(''),
      valor: new FormControl(''),
      quantidade: new FormControl(''),

    });

  }
  AddNewComp() {
    this.composicoes = this.formulario.get("composicoes") as FormArray;
    this.composicoes.push(this.genRow())
  }

  genRow() {
    return new FormGroup({
      name: new FormControl(''),
      valor: new FormControl(''),
      quantidade: new FormControl(''),
    })
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