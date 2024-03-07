import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
import { error } from 'jquery';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit{
  countries:any[]=[];

  nomePortal:string;

  cursos: string[] = [];
  constructor(private cursosService:CursosService){
    this.nomePortal = 'http://loaine.traning';

    //var servico = new CursosService();
    this.cursos = this.cursosService.getCursos();
  }

  
  ngOnInit(): void {
      this.cursosService.getCountries().subscribe((data)=>{this.countries = data ;
        console.log("Dados recebidos da API:",data)
      },
        (error) =>{
          console.log("Erro ao obter da  API:",error)
        }
      );
  }

}
