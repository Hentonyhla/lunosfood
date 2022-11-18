import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosNovoComponent } from './produtos-novo/produtos-novo.component';
import { ProdutosEditarComponent } from './produtos-editar/produtos-editar.component';
import { ProdutosListarComponent } from './produtos-listar/produtos-listar.component';



@NgModule({
  declarations: [
    ProdutosEditarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }
