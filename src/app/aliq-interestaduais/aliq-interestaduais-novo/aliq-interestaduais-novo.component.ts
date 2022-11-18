import { Component, OnInit } from '@angular/core';
import { Aliquotas_Interestaduais } from 'src/app/models/aliquotas-inter.model';
import { Route } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AliqInterestaduaisService } from '../aliq-interestaduais.service';
import { EstadosService } from 'src/app/estados.service';
import { Estados } from 'src/app/models/estados.model';

@Component({
  selector: 'app-aliq-interestaduais-novo',
  templateUrl: './aliq-interestaduais-novo.component.html',
  styleUrls: ['./aliq-interestaduais-novo.component.css']
})
export class AliqInterestaduaisNovoComponent implements OnInit {

  formulario!: FormGroup;
  estados!: Estados[];
  estado_origem!: string;
  estado_destino!: string;

  constructor(private aliqInterestaduaisService: AliqInterestaduaisService, private estadosService: EstadosService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.estadosService.getAll().subscribe(data => this.estados = data);
  }
  inicializarFormulario() {
    this.formulario = this.formBuilder.group({

      estado_origem: new FormControl('',Validators.required),
      estado_destino: new FormControl('',Validators.required),
      aliquota_interna: new FormControl('',Validators.required),
      percentual_participacao: new FormControl('',Validators.required),
      percentual: new FormControl('', Validators.required),

    });

  }
  salvar() {

    if (!this.formulario.valid) {
      this.formulario.markAllAsTouched();
      return
    }
    this.aliqInterestaduaisService.create(this.formulario.value)
      .subscribe(
        result => this.aliqInterestaduaisService.mostrarMensagem('Dados gravados com sucesso!', false),
        
        erro => {
          this.aliqInterestaduaisService.mostrarMensagem('Falha ao gravar dados!', true);
          console.error(erro)
        }
      )
  }
}
