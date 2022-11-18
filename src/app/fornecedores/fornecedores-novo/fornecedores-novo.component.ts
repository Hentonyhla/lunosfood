import { Component, OnInit } from '@angular/core';
import { Fornecedores } from 'src/app/models/fornecedores.model';
import { FornecedoresService } from '../fornecedores.service';
import { Route } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fornecedores-novo',
  templateUrl: './fornecedores-novo.component.html',
  styleUrls: ['./fornecedores-novo.component.css']
})
export class FornecedoresNovoComponent implements OnInit {
  ativos: string[] = [
    'Sim',
    'Não'
  ]

  tipo_empresa: string[] = [
    'Contribuinte',
    'Não Contribinte',
    'Isento'
  ]

  formulario!: FormGroup;

  constructor(private fornecedoresService: FornecedoresService, private formBuilder: FormBuilder) { }

  buscaCep(valor, formulario) {
    this.fornecedoresService.buscaCep(valor).subscribe((dados) => this.popularForm(dados, this.formulario))
  }
  popularForm(dados, formulario) {
    this.formulario.patchValue({
      ibge: dados.ibge
    })

  }

  buscaCnpj(val, formulario){
    this.fornecedoresService.buscaReceita(val).subscribe((dados) => this.popularFormulario(dados, this.formulario))
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
      data_abertura: dados.abertura,
      natureza_juridica: dados.natureza_juridica
    })
  }
  ngOnInit(): void {
    this.inicializarFormulario();
  }
  inicializarFormulario() {
    this.formulario = this.formBuilder.group({

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
      contato: new FormControl(''),
      tipo_empresa: new FormControl('', Validators.required),
      porte: new FormControl(''),
      data_abertura: new FormControl(''),
      natureza_juridica: new FormControl(''),

    });

  }
  
  salvar() {

    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return
    }
    this.fornecedoresService.create(this.formulario.value)
      .subscribe(
        result => this.fornecedoresService.mostrarMensagem('Dados gravados com sucesso!', false),
        
        erro => {
          this.fornecedoresService.mostrarMensagem('Falha ao gravar dados!', true);
          console.error(erro)
        }
      )
  }
}
