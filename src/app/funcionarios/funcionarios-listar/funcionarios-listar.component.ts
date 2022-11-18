import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router} from '@angular/router';
import { Funcionarios } from 'src/app/models/funcionarios.model';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios-listar',
  templateUrl: './funcionarios-listar.component.html',
  styleUrls: ['./funcionarios-listar.component.css']
})
export class FuncionariosListarComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'sobrenome', 'telefone', 'cidade', 'detalhes'];
  //dataSource;
  dataSource = new MatTableDataSource<Funcionarios>;

  constructor(private router: Router, private funcionariosService: FuncionariosService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.listarFuncionarios();
  }
  listarFuncionarios(): void {
    this.funcionariosService.getAll()
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  Novo() {
    this.router.navigate(['/funcionarios-novo']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  delete(id){
 if (confirm('Deseja realmente deletar o registro selecionado?')) 
          this.funcionariosService.delete(id)
            .subscribe(
              result => {
                this.funcionariosService.mostrarMensagem('O item selecionado foi excluído', false);
                this.listarFuncionarios();
              },
              error => console.log(error)
            )
        }

}
