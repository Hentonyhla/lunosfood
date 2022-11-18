import { Component, OnInit } from '@angular/core';
import { Funcionarios } from 'src/app/models/funcionarios.model';
import { FuncionariosService } from '../funcionarios.service';
import { GeraisService } from 'src/app/gerais.service';
import { Route } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-funcionarios-novo',
  templateUrl: './funcionarios-novo.component.html',
  styleUrls: ['./funcionarios-novo.component.css']
})
export class FuncionariosNovoComponent implements OnInit {

  ativos: string[] = [
    'Sim',
    'Não'
  ]
  formulario!: FormGroup;

  constructor(private funcionariosService: FuncionariosService, private geraisService: GeraisService , private formBuilder: FormBuilder) { }

  buscaCep(valor, formulario) {
    this.geraisService.buscaCep(valor).subscribe((dados) => this.popularForm(dados, this.formulario))
  }
  popularForm(dados, formulario) {
    this.formulario.patchValue({
      cep: dados.cep,
      cidade: dados.localidade,
      bairro: dados.bairro,
      uf: dados.uf,
      logradouro: dados.logradouro

    })

  }
  ngOnInit(): void {
    this.inicializarFormulario();
  }
  inicializarFormulario() {
    this.formulario = this.formBuilder.group({

      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sobrenome: new FormControl(''),
      nome_social: new FormControl(''),
      cpf: new FormControl('', Validators.required),
      rg: new FormControl(''),
      logradouro: new FormControl(''),
      numero: new FormControl(''),
      cep: new FormControl('', Validators.required),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      uf: new FormControl(''),
      ativo: new FormControl('', Validators.required),
      telefone: new FormControl(''),
      data_nascimento: new FormControl('')

    });

  }
  
  salvar() {

    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return
    }
    this.funcionariosService.create(this.formulario.value)
      .subscribe(
        result => this.funcionariosService.mostrarMensagem('Dados gravados com sucesso!', false),
        
        erro => {
          this.funcionariosService.mostrarMensagem('Falha ao gravar dados!', true);
          console.error(erro)
        }
      )
  }
}
