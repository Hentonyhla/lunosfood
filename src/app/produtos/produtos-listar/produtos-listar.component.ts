import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Produtos } from 'src/app/models/produtos.models';
import { ProdutosService } from '../produtos.service';
import { EstoquesService } from 'src/app/estoques.service';
import { Estados } from 'src/app/models/estados.model';
import { of, } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-produtos-listar',
  templateUrl: './produtos-listar.component.html',
  styleUrls: ['./produtos-listar.component.css']
})
export class ProdutosListarComponent implements OnInit, AfterViewInit {
  displayedColumns: any = ['nome', 'descricao', 'estoques', 'detalhes'];
  //dataSource;
  dataSource = new MatTableDataSource<Produtos>;

  constructor(private router: Router, private produtosService: ProdutosService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtosService.getAll()
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
    this.router.navigate(['/produtos-novo']);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id) {

    this.produtosService.delete(id)
      .subscribe(
        result => {
          this.produtosService.mostrarMensagem('O item selecionado foi excluído', false);
          this.listarProdutos();
        },
        error => console.log(error)
      )
  }

}
