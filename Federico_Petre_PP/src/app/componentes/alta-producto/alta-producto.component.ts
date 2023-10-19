import { Component } from '@angular/core';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent {

  paisSeleccionado : string = ''; 

  asignarPais(pais : string){
    this.paisSeleccionado = pais;
    console.log(this.paisSeleccionado);
  }

}
