import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produtos } from 'src/app/models/produtos.models';
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
import { debounceTime, filter, map, Observable, startWith, switchMap } from 'rxjs';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-produtos-novo',
  templateUrl: './produtos-novo.component.html',
  styleUrls: ['./produtos-novo.component.css']
})
export class ProdutosNovoComponent implements OnInit {
  selectComponent;

  formulario!: FormGroup;
  produtos: Produtos[] = [];
  grupos: Grupos[] = []
  filiais!: Filiais[];
  aliquotas: Aliquotas[] = [];
  razao_social!: string;
  codigo_csosn!: number;
  ncm: Ncm[] = [];
  csosns: Csosns[] = [];
  origens: Origens[] = [];
  codigoNcm: any;
  nome: any;
  fornecedores: Fornecedores[] = [];

  //filtros
  filteredNcm!: Observable<Ncm[]>;
  filteredFornecedores!: Observable<Fornecedores[]>;
  filteredGrupos!: Observable<Grupos[]>;
  filteredFiliais!: Observable<Filiais[]>;
  filteredCsosn!: Observable<Csosns[]>;
  filteredOrigens!: Observable<Origens[]>;

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
    ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.filiaisService.getAll().subscribe(data => this.filiais = data);
    this.fornecedoresService.getAll().subscribe(data => this.fornecedores = data);
    this.csosnsService.getAll().subscribe(data => this.csosns = data);
    this.gruposService.getAll().subscribe(data => this.grupos = data);
    this.origensService.getAll().subscribe(data => this.origens = data);
    this.aliquotasService.getAll().subscribe(data => this.aliquotas = data);

    this.selectComponent.overlayDir.positions = [
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
      }
    ];
    
    this.filteredNcm = this.formulario.controls['codigoNcm'].valueChanges.pipe(
      startWith(""),
      debounceTime(300),
      switchMap(value => this.NcmFilter(value)))
  }

  //Funções de Filtro
  NcmFilter(value) {
    return this.ncmService.getAll().pipe(
      map(response =>
        response.filter(
          option => {
          return option.Descricao.indexOf(value) === 0;
        })
      )
    );

  }

  getNcmText(option) {
    return option.Descricao;
  }


  ///////////////////////////////////
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
      //Descricao: new FormControl(''),
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