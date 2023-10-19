import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionHTTPService {

  constructor(private xhttp : HttpClient) { }

  async traerInformacionGithub(){
    try{
      const response : any = await fetch("https://api.github.com/users/federicopetre");
      const informacion = response.json();
      return informacion;

    }catch(error){
      console.log(error);
    }
  }

  async traerPaises(){
    try{
      const response : any = await fetch("https://restcountries.com/v3.1/all");
      const informacion = response.json();
      return informacion;

    }catch(error){
      console.log(error);
    }
  }

  async traerInfoPais(nombrePais : string){
    try {
      const paises = await this.traerPaises();    

      let infoPais = {
        nombre: '',
        lenguaje: '',
        capital:'',
        bandera:''
      };

      paises.forEach((pais:any)=>{
        if(pais.name.common == nombrePais){

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

          infoPais.nombre = pais.name.common;
          infoPais.lenguaje = lenguajeHablado;
          infoPais.capital = pais.capital[0];
          infoPais.bandera = pais.flags.png;
        }
        
      });

      return infoPais;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
