import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router} from '@angular/router';
import { Fornecedores } from 'src/app/models/fornecedores.model';
import { FornecedoresService } from '../fornecedores.service';


@Component({
  selector: 'app-fornecedores-listar',
  templateUrl: './fornecedores-listar.component.html',
  styleUrls: ['./fornecedores-listar.component.css']
})
export class FornecedoresListarComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['razao_social', 'nome_fantasia', 'cnpj', 'municipio', 'telefone', 'detalhes'];
  //dataSource;
  dataSource = new MatTableDataSource<Fornecedores>;

  constructor(private router: Router, private fornecedoresService: FornecedoresService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.listarFornecedores();
  }
  listarFornecedores(): void {
    this.fornecedoresService.getAll()
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
    this.router.navigate(['/fornecedores-novo']);
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
          this.fornecedoresService.delete(id)
            .subscribe(
              result => {
                this.fornecedoresService.mostrarMensagem('O item selecionado foi excluído', false);
                this.listarFornecedores();
              },
              error => console.log(error)
            )
        }

}
