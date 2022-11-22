import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes.model';
import { GeraisService } from 'src/app/gerais.service';
import { ClientesService } from '../clientes.service';
import { Route } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes-novo',
  templateUrl: './clientes-novo.component.html',
  styleUrls: ['./clientes-novo.component.css']
})
export class ClientesNovoComponent implements OnInit {

  ativos: string[] = [
    'Sim',
    'Não'
  ]

  tipo_empresa: string[] = [
    'Contribuinte',
    'Não Contribinte',
    'Isento'
  ]

  radioForm;
  formulario!: FormGroup;

  constructor(private clientesService: ClientesService, private geraisService:GeraisService ,private formBuilder: FormBuilder) { }

  buscaCep(valor, formulario) {
    this.geraisService.buscaCep(valor).subscribe((dados) => this.popularForm(dados, this.formulario))
  }
  popularForm(dados, formulario) {
    this.formulario.patchValue({
      ibge: dados.ibge,
      logradouro: dados.logradouro,
      cidade: dados.localidade,
      uf: dados.uf,
      cep: dados.cep,
      bairro: dados.bairro,
    })

  }

  buscaCnpj(val, formulario){
    this.geraisService.buscaReceita(val).subscribe((dados) => this.popularFormulario(dados, this.formulario))
  }

  popularFormulario(dados, formulario){
    this.formulario.patchValue({
      cnpj_cpf: dados.cnpj,
      razao_nome: dados.nome,
      fantasia_sobrenome: dados.fantasia,
      email: dados.email,
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

      razao_nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
      fantasia_sobrenome: new FormControl(''),
      cnpj_cpf: new FormControl('', Validators.required),
      ie_rg: new FormControl(''),
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
      tipo: new FormControl(''),

    });

  }
  
  salvar() {

    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return
    }
    this.clientesService.create(this.formulario.value)
      .subscribe(
        result => this.clientesService.mostrarMensagem('Dados gravados com sucesso!', false),
        
        erro => {
          this.clientesService.mostrarMensagem('Falha ao gravar dados!', true);
          console.error(erro)
        }
      )
  }
}
