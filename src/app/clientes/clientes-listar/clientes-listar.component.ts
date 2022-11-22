import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-listar',
  templateUrl: './clientes-listar.component.html',
  styleUrls: ['./clientes-listar.component.css']
})
export class ClientesListarComponent implements OnInit {

  displayedColumns: string[] = ['razao_nome', 'fantasia_sobrenome', 'cnpj_cpf', 'cidade', 'telefone', 'detalhes'];
  //dataSource;
  dataSource = new MatTableDataSource<Clientes>;

  constructor(private router: Router, private clientesService: ClientesService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.listarClientes();
  }
  listarClientes(): void {
    this.clientesService.getAll()
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
    this.router.navigate(['/clientes-novo']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id) {
    if (confirm('Deseja realmente deletar o registro selecionado?'))
      this.clientesService.delete(id)
        .subscribe(
          result => {
            this.clientesService.mostrarMensagem('O item selecionado foi excluído', false);
            this.listarClientes();
          },
          error => console.log(error)
        )
  }

}
