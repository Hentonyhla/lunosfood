import { Component, OnInit } from '@angular/core';
import { AliqInterestaduaisService } from '../aliq-interestaduais.service';
import { Aliquotas_Interestaduais } from 'src/app/models/aliquotas-inter.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EstadosService } from 'src/app/estados.service';
import { Estados } from 'src/app/models/estados.model';


@Component({
  selector: 'app-aliq-interestaduais-editar',
  templateUrl: './aliq-interestaduais-editar.component.html',
  styleUrls: ['./aliq-interestaduais-editar.component.css']
})
export class AliqInterestaduaisEditarComponent implements OnInit {

  aliquotas_Interestaduais!: Aliquotas_Interestaduais;
  formulario!: FormGroup;
  estados!: Estados[];
  estado_origem!: string;
  estado_destino!: string;

  constructor(private aliqInterestaduaisService: AliqInterestaduaisService, private estadosService: EstadosService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, 
    private _snackBar: MatSnackBar) { }

  getaliquotasById(){

    let id = this.route.snapshot.params['id'];
    this.aliqInterestaduaisService.getId(id)
      .subscribe(
        //dados => this.produto = dados
        aliquotas_Interestaduais => this.formulario.setValue(aliquotas_Interestaduais)
      );

  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.getaliquotasById();
    this.estadosService.getAll().subscribe(data => this.estados = data);
  }

inicializarFormulario() {
  this.formulario = this.formBuilder.group({
    id: new FormControl(''),
    estado_origem: new FormControl('',Validators.required),
    estado_destino: new FormControl('',Validators.required),
    aliquota_interna: new FormControl('',Validators.required),
    percentual_participacao: new FormControl('',Validators.required),
    percentual: new FormControl('', Validators.required),
  });

}
  salvar(){

    if( !this.formulario.valid ){
      this.formulario.markAllAsTouched();
      return
    }

    let aliquotas_Interestaduais: Aliquotas_Interestaduais = this.formulario.value;
    this.aliqInterestaduaisService.update(aliquotas_Interestaduais)
    .subscribe(
      retorno => {
        this.aliqInterestaduaisService.mostrarMensagem('Os dados foram salvos!', false);
      },
      erro => {
      this.aliqInterestaduaisService.mostrarMensagem('Falha ao gravar dados!', true);
      console.error(erro)}
    );
  }
}

