import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router} from '@angular/router';
import { AliqInterestaduaisService } from '../aliq-interestaduais.service';
import { Aliquotas_Interestaduais } from 'src/app/models/aliquotas-inter.model';


@Component({
  selector: 'app-aliq-interestaduais-list',
  templateUrl: './aliq-interestaduais-list.component.html',
  styleUrls: ['./aliq-interestaduais-list.component.css']
})
export class AliqInterestaduaisListComponent implements OnInit {

  displayedColumns: string[] = ['estado_origem', 'estado_destino', 'percentual', 'aliquota_interna','percentual_participacao', 'detalhes'];
  //dataSource;
  dataSource = new MatTableDataSource<Aliquotas_Interestaduais>;

  constructor(private router: Router, private aliqInterestaduaisService: AliqInterestaduaisService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.listarAliquotasInt();
  }
  listarAliquotasInt(): void {
    this.aliqInterestaduaisService.getAll()
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
    this.router.navigate(['/aliquotas-int-novo']);
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
          this.aliqInterestaduaisService.delete(id)
            .subscribe(
              result => {
                this.aliqInterestaduaisService.mostrarMensagem('O item selecionado foi excluído', false);
                this.listarAliquotasInt();
              },
              error => console.log(error)
            )
        }

}

