import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProdutosListarComponent } from './produtos/produtos-listar/produtos-listar.component';
import { ProdutosEditarComponent } from './produtos/produtos-editar/produtos-editar.component';
import { ProdutosNovoComponent } from './produtos/produtos-novo/produtos-novo.component';
import { FornecedoresListarComponent } from './fornecedores/fornecedores-listar/fornecedores-listar.component';
import { FornecedoresEditarComponent } from './fornecedores/fornecedores-editar/fornecedores-editar.component';
import { FornecedoresNovoComponent } from './fornecedores/fornecedores-novo/fornecedores-novo.component';
import { AliquotasListarComponent } from './aliquotas/aliquotas-listar/aliquotas-listar.component';
import { AliquotasEditarComponent } from './aliquotas/aliquotas-editar/aliquotas-editar.component';
import { AliquotasNovoComponent } from './aliquotas/aliquotas-novo/aliquotas-novo.component';
import { FiliaisEditarComponent } from './filiais/filiais-editar/filiais-editar.component';
import { FiliaisListarComponent } from './filiais/filiais-listar/filiais-listar.component';
import { FiliaisNovoComponent } from './filiais/filiais-novo/filiais-novo.component';
import { GruposEditarComponent } from './grupos/grupos-editar/grupos-editar.component';
import { GruposListarComponent } from './grupos/grupos-listar/grupos-listar.component';
import { GruposNovoComponent } from './grupos/grupos-novo/grupos-novo.component';
import { AliqInterestaduaisListComponent } from './aliq-interestaduais/aliq-interestaduais-list/aliq-interestaduais-list.component';
import { AliqInterestaduaisEditarComponent } from './aliq-interestaduais/aliq-interestaduais-editar/aliq-interestaduais-editar.component';
import { AliqInterestaduaisNovoComponent } from './aliq-interestaduais/aliq-interestaduais-novo/aliq-interestaduais-novo.component';
import { FuncionariosEditarComponent } from './funcionarios/funcionarios-editar/funcionarios-editar.component';
import { FuncionariosListarComponent } from './funcionarios/funcionarios-listar/funcionarios-listar.component';
import { FuncionariosNovoComponent } from './funcionarios/funcionarios-novo/funcionarios-novo.component';
import { ClientesEditarComponent } from './clientes/clientes-editar/clientes-editar.component';
import { ClientesListarComponent } from './clientes/clientes-listar/clientes-listar.component';
import { ClientesNovoComponent } from './clientes/clientes-novo/clientes-novo.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  //Produtos
  {path : 'produtos-list', component: ProdutosListarComponent},
  {path : 'produtos-edit/:id', component : ProdutosEditarComponent},
  {path : 'produtos-novo', component: ProdutosNovoComponent}, 
  //Fornecedores      
  {path : 'fornecedores-list', component: FornecedoresListarComponent},
  {path : 'fornecedores-edit/:id', component : FornecedoresEditarComponent},
  {path : 'fornecedores-novo', component: FornecedoresNovoComponent},   
  //Aliquotas
  {path : 'aliquotas-list', component: AliquotasListarComponent},
  {path : 'aliquotas-edit/:id', component : AliquotasEditarComponent},
  {path : 'aliquotas-novo', component: AliquotasNovoComponent},  
  //Filiais
  {path : 'filiais-list', component: FiliaisListarComponent},
  {path : 'filiais-edit/:id', component : FiliaisEditarComponent},
  {path : 'filiais-novo', component: FiliaisNovoComponent}, 
  //Grupos
  {path : 'grupos-list', component: GruposListarComponent},
  {path : 'grupos-edit/:id', component : GruposEditarComponent},
  {path : 'grupos-novo', component: GruposNovoComponent}, 
  //Aliquotas_Interestaduais
  {path : 'aliquotas-int-list', component: AliqInterestaduaisListComponent},
  {path : 'aliquotas-int-edit/:id', component : AliqInterestaduaisEditarComponent},
  {path : 'aliquotas-int-novo', component: AliqInterestaduaisNovoComponent}, 
  //Funcionarios
  {path : 'funcionarios-list', component: FuncionariosListarComponent},
  {path : 'funcionarios-edit/:id', component : FuncionariosEditarComponent},
  {path : 'funcionarios-novo', component: FuncionariosNovoComponent}, 
  //Clientes
  {path : 'clientes-list', component : ClientesListarComponent},
  {path : 'clientes-edit/:id', component: ClientesEditarComponent},
  {path : 'clientes-novo', component: ClientesNovoComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
