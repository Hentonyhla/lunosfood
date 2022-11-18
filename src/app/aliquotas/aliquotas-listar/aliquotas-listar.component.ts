import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router} from '@angular/router';
import { Aliquotas } from 'src/app/models/aliquotas.model';
import { AliquotasService } from '../aliquotas.service';

@Component({
  selector: 'app-aliquotas-listar',
  templateUrl: './aliquotas-listar.component.html',
  styleUrls: ['./aliquotas-listar.component.css']
})
export class AliquotasListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'percentual', 'detalhes'];
  //dataSource;
  dataSource = new MatTableDataSource<Aliquotas>;

  constructor(private router: Router, private aliquotasService: AliquotasService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.listarAliquotas();
  }
  listarAliquotas(): void {
    this.aliquotasService.getAll()
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
    this.router.navigate(['/aliquotas-novo']);
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
          this.aliquotasService.delete(id)
            .subscribe(
              result => {
                this.aliquotasService.mostrarMensagem('O item selecionado foi excluído', false);
                this.listarAliquotas();
              },
              error => console.log(error)
            )
        }

}
