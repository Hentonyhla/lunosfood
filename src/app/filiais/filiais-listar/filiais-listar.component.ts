import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router} from '@angular/router';
import { Filiais } from 'src/app/models/filiais.model';
import { FiliaisService } from '../filiais.service';


@Component({
  selector: 'app-filiais-listar',
  templateUrl: './filiais-listar.component.html',
  styleUrls: ['./filiais-listar.component.css']
})
export class FiliaisListarComponent implements OnInit {

  displayedColumns: string[] = ['razao_social', 'nome_fantasia', 'cnpj', 'tipo', 'telefone', 'detalhes'];
  //dataSource;
  dataSource = new MatTableDataSource<Filiais>;

  constructor(private router: Router, private filiaisService: FiliaisService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.listarFiliais();
  }
  listarFiliais(): void {
    this.filiaisService.getAll()
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
    this.router.navigate(['/filiais-novo']);
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
          this.filiaisService.delete(id)
            .subscribe(
              result => {
                this.filiaisService.mostrarMensagem('O item selecionado foi excluído', false);
                this.listarFiliais();
              },
              error => console.log(error)
            )
        }

}
