import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule

  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  exports:[
    CursosComponent
  ],
  providers:[CursosService]
})
export class CursosModule { }
