import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produtos } from 'src/app/models/produtos.models';
import { Estoques } from 'src/app/models/estoques.model';
import { EstoquesService } from 'src/app/estoques.service';
import { Origens } from 'src/app/models/origens.model';
import { OrigensService } from 'src/app/origens.service';
import { Fornecedores } from 'src/app/models/fornecedores.model';
import { FornecedoresService } from 'src/app/fornecedores/fornecedores.service';
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
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos-editar',
  templateUrl: './produtos-editar.component.html',
  styleUrls: ['./produtos-editar.component.css']
})
export class ProdutosEditarComponent implements OnInit {
  formulario!: FormGroup;
  produtos: Produtos[] = [];
  grupos: Grupos[] = [];
  filiais: Filiais[] = [];
  aliquotas: Aliquotas[] = [];
  razao_social!: string;
  codigo_csosn!: number;
  ncm: Ncm[] = [];
  csosns!: Csosns[];
  estoques: Estoques[] = [];
  origens: Origens[] = [];
  Descricao_ncm: any;
  nome: any;
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
    private ncmService: NcmService,
    private router: Router,
    private route: ActivatedRoute,
    private estoquesService: EstoquesService,

  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.getprodutosById();
    this.filiaisService.getAll().subscribe(data => this.filiais = data);
    this.estoquesService.getAll().subscribe(data => this.estoques = data);
    this.fornecedoresService.getAll().subscribe(data => this.fornecedores = data);
    this.csosnsService.getAll().subscribe(data => this.csosns = data);
    this.origensService.getAll().subscribe(data => this.origens = data);
    this.aliquotasService.getAll().subscribe(data => this.aliquotas = data);
    this.gruposService.getAll().subscribe(data => this.grupos = data);
  }

  getprodutosById() {

    let id = this.route.snapshot.params['id'];
    this.produtosService.getId(id)
      .subscribe(
        produtos => this.formulario.setValue(produtos),
        estoques => this.formulario.setValue(estoques),
      );
      
  }
 
  Pesquisa() {
    this.ncmService.getAll().subscribe(data => this.ncm = data);
  }

  Search() {
    if (this.Descricao_ncm == "") {
      this.Pesquisa();
    } else {
      this.ncm = this.ncm.filter(res => {
        return res.Descricao.toLocaleLowerCase().match(this.Descricao_ncm.toLocaleLowerCase());
      })
    }
  }

  PesquisaComp() {
    this.produtosService.getAll().subscribe(data => this.produtos = data);
  }

  SearchComp() {
    if (this.nome == "") {
      this.PesquisaComp();
    } else {
      this.produtos = this.produtos.filter(res => {
        return res.nome.toLocaleLowerCase().match(this.nome.toLocaleLowerCase());
      })
    }
  }

  inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      id: new FormControl(''),
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
      id_fornecedor: new FormControl(''),
      id_grupo: new FormControl(''),
      createdAt: new FormControl(''),
      updatedAt: new FormControl(''),
      estoques: this.formBuilder.group({
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
      }),
      //Descricao: new FormControl(''),
    });
  }
  
  salvar() {

    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return
    }

    let produtos: Produtos = this.formulario.value;
    this.produtosService.update(produtos)
      .subscribe(
        retorno => {
          this.produtosService.mostrarMensagem('Os dados foram salvos!', false);
        },
        erro => {
          this.produtosService.mostrarMensagem('Falha ao gravar dados!', true);
          console.error(erro)
        }
      );
  }
}

