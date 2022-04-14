import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { InfoService } from './service/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infoPais';
  listPaises: any []=[];
  busquedaPais: any =[];
  busPais: any []=[];

  pais='';
  form:FormGroup;
  pageSize:number=20;
  inicio: number=0;
  fin:number=20;

  constructor(
    private info: InfoService,
    private fb:FormBuilder    
  ){
    this.form=this.fb.group({
      nombre:['']
    })
  }
  

  getPaises(){
    this.info.getPaises()
    .subscribe(listPaises =>{(this.listPaises=listPaises)
    })
  }
  searchPais(nombre: string){
    this.info.searchPais(nombre)
     .subscribe(busquedaPais=>{(this.busquedaPais=busquedaPais)
     console.log(busquedaPais);
    //  const pais: any={
    //    nombre: this.form.get("nombre")?.value,
  //   this.busquedaPais.push(pais)
  //   console.log(this.busquedaPais)
     })
    //  this.busquedaPais.push(pais)
    //  this.form.reset();
    //  console.log(this.busquedaPais)
    }

  cambiarPagina(e:PageEvent){
    this.inicio=e.pageIndex*e.pageSize;
    this.fin=this.inicio+e.pageSize;
  }
  
  ngOnInit(){
    this.getPaises();
  }
}
