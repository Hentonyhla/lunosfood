import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutosNovoComponent } from './produtos/produtos-novo/produtos-novo.component';
import { ProdutosEditarComponent } from './produtos/produtos-editar/produtos-editar.component';
import { ProdutosListarComponent } from './produtos/produtos-listar/produtos-listar.component';
import { FornecedoresNovoComponent } from './fornecedores/fornecedores-novo/fornecedores-novo.component';
import { FornecedoresEditarComponent } from './fornecedores/fornecedores-editar/fornecedores-editar.component';
import { FornecedoresListarComponent } from './fornecedores/fornecedores-listar/fornecedores-listar.component';
import { AliquotasEditarComponent } from './aliquotas/aliquotas-editar/aliquotas-editar.component';
import { AliquotasListarComponent } from './aliquotas/aliquotas-listar/aliquotas-listar.component';
import { AliquotasNovoComponent } from './aliquotas/aliquotas-novo/aliquotas-novo.component';
import { FiliaisEditarComponent } from './filiais/filiais-editar/filiais-editar.component';
import { FiliaisListarComponent } from './filiais/filiais-listar/filiais-listar.component';
import { FiliaisNovoComponent } from './filiais/filiais-novo/filiais-novo.component';
import { GruposListarComponent } from './grupos/grupos-listar/grupos-listar.component';
import { GruposEditarComponent } from './grupos/grupos-editar/grupos-editar.component';
import { GruposNovoComponent } from './grupos/grupos-novo/grupos-novo.component';
import { AliqInterestaduaisEditarComponent } from './aliq-interestaduais/aliq-interestaduais-editar/aliq-interestaduais-editar.component';
import { AliqInterestaduaisListComponent } from './aliq-interestaduais/aliq-interestaduais-list/aliq-interestaduais-list.component';
import { AliqInterestaduaisNovoComponent } from './aliq-interestaduais/aliq-interestaduais-novo/aliq-interestaduais-novo.component';
import { FuncionariosEditarComponent } from './funcionarios/funcionarios-editar/funcionarios-editar.component';
import { FuncionariosListarComponent } from './funcionarios/funcionarios-listar/funcionarios-listar.component';
import { FuncionariosNovoComponent } from './funcionarios/funcionarios-novo/funcionarios-novo.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosNovoComponent,
    ProdutosListarComponent,
    FornecedoresNovoComponent,
    FornecedoresEditarComponent,
    FornecedoresListarComponent,
    AliquotasEditarComponent,
    AliquotasListarComponent,
    AliquotasNovoComponent,
    FiliaisEditarComponent,
    FiliaisListarComponent,
    FiliaisNovoComponent,
    GruposNovoComponent,
    GruposListarComponent,
    GruposEditarComponent,
    AliqInterestaduaisNovoComponent,
    AliqInterestaduaisListComponent,
    AliqInterestaduaisEditarComponent,
    FuncionariosNovoComponent,
    FuncionariosListarComponent,
    FuncionariosEditarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule,
    MatTreeModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    HttpClientJsonpModule,
    MatDatepickerModule,
    MatNativeDateModule


  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
