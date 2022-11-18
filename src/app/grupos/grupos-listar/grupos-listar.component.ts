import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router} from '@angular/router';
import { Grupos } from 'src/app/models/grupos.model';
import { GruposService } from '../grupos.service';


@Component({
  selector: 'app-grupos-listar',
  templateUrl: './grupos-listar.component.html',
  styleUrls: ['./grupos-listar.component.css']
})
export class GruposListarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'ativo', 'detalhes'];
  //dataSource;
  dataSource = new MatTableDataSource<Grupos>;

  constructor(private router: Router, private gruposService: GruposService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.listarGrupos();
  }
  listarGrupos(): void {
    this.gruposService.getAll()
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
    this.router.navigate(['/grupos-novo']);
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
          this.gruposService.delete(id)
            .subscribe(
              result => {
                this.gruposService.mostrarMensagem('O item selecionado foi excluído', false);
                this.listarGrupos();
              },
              error => console.log(error)
            )
        }

}

