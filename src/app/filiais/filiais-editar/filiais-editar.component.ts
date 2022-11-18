import { Component, OnInit } from '@angular/core';
import { FiliaisService } from '../filiais.service';
import { Filiais } from 'src/app/models/filiais.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filiais-editar',
  templateUrl: './filiais-editar.component.html',
  styleUrls: ['./filiais-editar.component.css']
})
export class FiliaisEditarComponent implements OnInit {

  filiais!: Filiais;
  formulario!: FormGroup;

  constructor(private filiaisService: FiliaisService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, 
    private _snackBar: MatSnackBar) { }
    ativos: string[] = [
      'Sim',
      'Não'
    ]
  
    tipo_empresa: string[] = [
      'Contribuinte',
      'Não Contribinte',
      'Isento'
    ]

  buscaCep(valor, formulario) {
    this.filiaisService.buscaCep(valor).subscribe((dados) => this.popularForm(dados, this.formulario))
  }
  popularForm(dados, formulario) {
    this.formulario.patchValue({
      ibge: dados.ibge
    })

  }

  buscaCnpj(val, formulario){
    this.filiaisService.buscaReceita(val).subscribe((dados) => this.popularFormulario(dados, this.formulario))
  }

  popularFormulario(dados, formulario){
    this.formulario.patchValue({
      cnpj: dados.cnpj,
      razao_social: dados.nome,
      nome_fantasia: dados.fantasia,
      logradouro: dados.logradouro,
      numero: dados.numero,
      cidade: dados.municipio,
      uf: dados.uf,
      email: dados.email,
      cep: dados.cep,
      bairro: dados.bairro,
      complemento: dados.complemento,
      telefone: dados.telefone,
      porte: dados.porte,
      natureza_juridica: dados.natureza_juridica,
      tipo: dados.tipo
    })
  }
  
  getfiliaisById(){

    let id = this.route.snapshot.params['id'];
    this.filiaisService.getId(id)
      .subscribe(
        //dados => this.produto = dados
        filiais => this.formulario.setValue(filiais)
      );

  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.getfiliaisById();
  }

inicializarFormulario() {
  this.formulario = this.formBuilder.group({
    id: new FormControl(''),
    razao_social: new FormControl('', [Validators.required, Validators.minLength(5)]),
    nome_fantasia: new FormControl(''),
    cnpj: new FormControl('', Validators.required),
    inscricao_estadual: new FormControl(''),
    logradouro: new FormControl(''),
    numero: new FormControl(''),
    cep: new FormControl('', Validators.required),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    uf: new FormControl(''),
    ibge: new FormControl(''),
    codigo_pais: new FormControl('1058'),
    pais: new FormControl('Brasil'),
    ativo: new FormControl('', Validators.required),
    complemento: new FormControl(''),
    email: new FormControl('', Validators.email),
    telefone: new FormControl(''),
    celular: new FormControl(''),
    tipo_empresa: new FormControl('', Validators.required),
    porte: new FormControl(''),
    natureza_juridica: new FormControl(''),
    createdAt: new FormControl(''),
    updatedAt: new FormControl(''),
    tipo: new FormControl('')

  });

}
  salvar(){

    if( !this.formulario.valid ){
      this.formulario.markAllAsTouched();
      return
    }

    let filiais: Filiais = this.formulario.value;
    this.filiaisService.update(filiais)
    .subscribe(
      retorno => {
        this.filiaisService.mostrarMensagem('Os dados foram salvos!', false);
      },
      erro => {
      this.filiaisService.mostrarMensagem('Falha ao gravar dados!', true);
      console.error(erro)}
    );
  }
}

