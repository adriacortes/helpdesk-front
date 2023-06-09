import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  list: Tecnico[]=[]
  list2: Tecnico[]=[
    {
      id:1,
      nome:'Adria',
      cpf:'03312168171',
      email:'adria.aline@gmail.com',
      senha:'1234',
      perfis:['0','1','2'],
      dataCriacao:'15/08/2023'
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.list);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service:TecnicoService
  ){}
  
  ngOnInit(): void {
    this.findAll();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) =>{
      this.list = resposta;
      this.dataSource = new MatTableDataSource<Tecnico>(this.list);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  


  

}

