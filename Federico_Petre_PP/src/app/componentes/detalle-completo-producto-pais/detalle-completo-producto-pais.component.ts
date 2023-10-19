import { Component } from '@angular/core';
import { PeticionHTTPService } from 'src/app/servicios/peticion-http.service';

@Component({
  selector: 'app-detalle-completo-producto-pais',
  templateUrl: './detalle-completo-producto-pais.component.html',
  styleUrls: ['./detalle-completo-producto-pais.component.css']
})
export class DetalleCompletoProductoPaisComponent {
  produtoSeleccionado : any;
  paisSeleccionado : any;

  constructor(private xhttp: PeticionHTTPService){

  }

  async mostrarDetalleProducto(itemProducto : any){
    this.produtoSeleccionado = itemProducto;
    let pais = await this.xhttp.traerInfoPais(this.produtoSeleccionado.pais)
    this.paisSeleccionado = pais;
    console.log(this.produtoSeleccionado);
    console.log(JSON.stringify(pais));
  }

}
