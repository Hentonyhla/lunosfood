import { Component, OnInit } from '@angular/core';
import { Fornecedores } from 'src/app/models/fornecedores.model';
import { AliquotasService } from '../aliquotas.service';
import { Route } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aliquotas-novo',
  templateUrl: './aliquotas-novo.component.html',
  styleUrls: ['./aliquotas-novo.component.css']
})
export class AliquotasNovoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private aliquotasService: AliquotasService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }
  inicializarFormulario() {
    this.formulario = this.formBuilder.group({

      percentual: new FormControl('', Validators.required),

    });

  }
  salvar() {

    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return
    }
    this.aliquotasService.create(this.formulario.value)
      .subscribe(
        result => this.aliquotasService.mostrarMensagem('Dados gravados com sucesso!', false),
        
        erro => {
          this.aliquotasService.mostrarMensagem('Falha ao gravar dados!', true);
          console.error(erro)
        }
      )
  }
}