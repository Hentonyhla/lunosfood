import { Component, OnInit } from '@angular/core';
import { AliquotasService } from '../aliquotas.service';
import { Aliquotas } from 'src/app/models/aliquotas.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aliquotas-editar',
  templateUrl: './aliquotas-editar.component.html',
  styleUrls: ['./aliquotas-editar.component.css']
})
export class AliquotasEditarComponent implements OnInit {

  aliquotas!: Aliquotas;
  formulario!: FormGroup;

  constructor(private aliquotasService: AliquotasService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, 
    private _snackBar: MatSnackBar) { }

  getaliquotasById(){

    let id = this.route.snapshot.params['id'];
    this.aliquotasService.getId(id)
      .subscribe(
        //dados => this.produto = dados
        aliquotas => this.formulario.setValue(aliquotas)
      );

  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.getaliquotasById();
  }

inicializarFormulario() {
  this.formulario = this.formBuilder.group({
    id: new FormControl(''),
    percentual: new FormControl('', Validators.required),
  });

}
  salvar(){

    if( !this.formulario.valid ){
      this.formulario.markAllAsTouched();
      return
    }

    let aliquotas: Aliquotas = this.formulario.value;
    this.aliquotasService.update(aliquotas)
    .subscribe(
      retorno => {
        this.aliquotasService.mostrarMensagem('Os dados foram salvos!', false);
      },
      erro => {
      this.aliquotasService.mostrarMensagem('Falha ao gravar dados!', true);
      console.error(erro)}
    );
  }
}
