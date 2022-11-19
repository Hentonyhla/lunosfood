import { Component, OnInit } from '@angular/core';
import { Funcionarios } from 'src/app/models/funcionarios.model';
import { FuncionariosService } from '../funcionarios.service';
import { GeraisService } from 'src/app/gerais.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionarios-editar',
  templateUrl: './funcionarios-editar.component.html',
  styleUrls: ['./funcionarios-editar.component.css']
})
export class FuncionariosEditarComponent implements OnInit {
  ativos: string[] = [
    'Sim',
    'Não'
  ]
  funcionarios!: Funcionarios;
  formulario!: FormGroup;


  constructor(private funcionariosService: FuncionariosService, private route: ActivatedRoute, private geraisService: GeraisService, private router: Router, private formBuilder: FormBuilder, 
    private _snackBar: MatSnackBar) { }
    
    getfuncionariosById(){

    let id = this.route.snapshot.params['id'];
    this.funcionariosService.getId(id)
      .subscribe(
        //dados => this.produto = dados
        funcionarios => this.formulario.setValue(funcionarios)
      );

  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.getfuncionariosById();
  }
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

inicializarFormulario() {
  this.formulario = this.formBuilder.group({
    id: new FormControl(''),
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
    ativo: new FormControl(''),
    telefone: new FormControl(''),
    data_nascimento: new FormControl('')
  });

}
  salvar(){

    if( !this.formulario.valid ){
      this.formulario.markAllAsTouched();
      return
    }

    let funcionarios: Funcionarios = this.formulario.value;
    this.funcionariosService.update(funcionarios)
    .subscribe(
      retorno => {
        this.funcionariosService.mostrarMensagem('Os dados foram salvos!', false);
      },
      erro => {
      this.funcionariosService.mostrarMensagem('Falha ao gravar dados!', true);
      console.error(erro)}
    );
  }
}
