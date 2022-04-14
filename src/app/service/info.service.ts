import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisModelo } from '../../modelo/pais.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private BASE_URL="https://restcountries.com/v3.1/"

  constructor(
    private http:HttpClient,
  ) { }

  getPaises(){
    const path = `${this.BASE_URL}/all`;
    return this.http.get<PaisModelo[]>(path)
  }
  searchPais(name: string){
    const path = `${this.BASE_URL}/name/${name}`;
    return this.http.get<PaisModelo>(path)    
  }
}
