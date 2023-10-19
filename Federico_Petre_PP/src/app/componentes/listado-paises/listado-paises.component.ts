import { Component, OnInit } from '@angular/core';
import { PeticionHTTPService } from 'src/app/servicios/peticion-http.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent{
  paises: any= [];
  @Output() eventEmitter = new EventEmitter<string>();

  constructor(private xhttp : PeticionHTTPService){}

  
  async traerPaisesAmericaDelSur(){
    await this.traerPaises("South America");
  }

  async traerPaisesEuropa(){
    await this.traerPaises("Europe");
  }

  async traerPaisesAfrica(){
    await this.traerPaises("Africa");
  }

  async traerPaises(continente : string){
    this.paises = [];
    try {
      const paises = await this.xhttp.traerPaises();    

      paises.forEach((pais:any)=>{
        pais.continents.forEach((continenteStr:any)=>{
          if(continenteStr == continente){

            let lenguajeHablado = "";

            if(pais.languages.spa != null || pais.languages.spa != undefined){
              lenguajeHablado = "Español";
            }

            if(pais.languages.por != null || pais.languages.por != undefined){
              lenguajeHablado = "Portugués";
            }

            if(pais.languages.eng != null || pais.languages.eng != undefined){
              lenguajeHablado = "Inglés";
            }

            if(pais.languages.fra != null || pais.languages.fra != undefined){
              lenguajeHablado = "Francés";
            }

            if(pais.languages.nld != null || pais.languages.nld != undefined){
              lenguajeHablado = "Holandés";
            }


            let infoPais = {
              nombre: pais.name.common,
              lenguaje: lenguajeHablado,
              capital:pais.capital[0],
              bandera: pais.flags.png
            };

            if(this.paises.length < 4){
              this.paises.push(infoPais);
            }         
          }
        })
      });

    } catch (error) {
      console.error(error);
    }
  }

  agregarPais(value : string){
    console.log(value);
    this.eventEmitter.emit(value);
  }
}
