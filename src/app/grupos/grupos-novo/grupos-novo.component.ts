import { Component, OnInit } from '@angular/core';
import { Fornecedores } from 'src/app/models/fornecedores.model';
import { GruposService } from '../grupos.service';
import { Route } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-grupos-novo',
  templateUrl: './grupos-novo.component.html',
  styleUrls: ['./grupos-novo.component.css']
})
export class GruposNovoComponent implements OnInit {

  ativos: string[] = [
    'Sim',
    'Não'
  ]
  formulario!: FormGroup;

  constructor(private gruposService: GruposService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }
  inicializarFormulario() {
    this.formulario = this.formBuilder.group({

      nome: new FormControl('', Validators.required),
      ativo: new FormControl('')

    });

  }
  salvar() {

    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return
    }
    this.gruposService.create(this.formulario.value)
      .subscribe(
        result => this.gruposService.mostrarMensagem('Dados gravados com sucesso!', false),
        
        erro => {
          this.gruposService.mostrarMensagem('Falha ao gravar dados!', true);
          console.error(erro)
        }
      )
  }
}