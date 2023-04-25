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

  list: Tecnico[]=[];
  ELEMENT_DATA: Tecnico[] = [
    {
      id:1,
      nome:'Adria Aline',
      cpf:'03312168171',
      email:'adria.aline@gmail.com',
      senha:'123',
      perfis:['0'],
      dataCriacao:'05/04/2023'
    },
    {
      id:2,
      nome:'Luana Castro',
      cpf:'03312168171',
      email:'luana@gmail.com',
      senha:'123',
      perfis:['0'],
      dataCriacao:'05/04/2023'
    }
  ];
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.list);
  
  constructor(private service:TecnicoService){}
  
  ngOnInit(): void {
    this.findAll();

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) =>{
      resposta.forEach(tecnicos => {
        this.list.push(tecnicos);
        debugger
      })
    })
  }

  

}

