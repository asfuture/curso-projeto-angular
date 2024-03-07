import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
private apiUrl ='https://restcountries.com/v3.1/all?fields=name,common';

  constructor(private httpClient:HttpClient) { }

  getCountries():Observable<any>{
    return this.httpClient.get<any>(this.apiUrl)
  }

  getCursos(){
    return ['Java','Ext JS', 'Angular','React'];
  }
}
