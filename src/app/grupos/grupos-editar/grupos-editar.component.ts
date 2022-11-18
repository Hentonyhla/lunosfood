import { Component, OnInit } from '@angular/core';
import { GruposService } from '../grupos.service';
import { Grupos } from 'src/app/models/grupos.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupos-editar',
  templateUrl: './grupos-editar.component.html',
  styleUrls: ['./grupos-editar.component.css']
})
export class GruposEditarComponent implements OnInit {

  grupos!: Grupos;
  formulario!: FormGroup;

  constructor(private gruposService: GruposService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, 
    private _snackBar: MatSnackBar) { }

    getgruposById(){

    let id = this.route.snapshot.params['id'];
    this.gruposService.getId(id)
      .subscribe(
        //dados => this.produto = dados
        grupos => this.formulario.setValue(grupos)
      );

  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.getgruposById();
  }

inicializarFormulario() {
  this.formulario = this.formBuilder.group({
    id: new FormControl(''),
    nome: new FormControl('', Validators.required),
    ativo: new FormControl('')
  });

}
  salvar(){

    if( !this.formulario.valid ){
      this.formulario.markAllAsTouched();
      return
    }

    let grupos: Grupos = this.formulario.value;
    this.gruposService.update(grupos)
    .subscribe(
      retorno => {
        this.gruposService.mostrarMensagem('Os dados foram salvos!', false);
      },
      erro => {
      this.gruposService.mostrarMensagem('Falha ao gravar dados!', true);
      console.error(erro)}
    );
  }
}
