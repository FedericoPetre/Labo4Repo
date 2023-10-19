import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-productos-listado-publico',
  templateUrl: './productos-listado-publico.component.html',
  styleUrls: ['./productos-listado-publico.component.css']
})
export class ProductosListadoPublicoComponent {
  constructor(private firebase :  FirebaseService){

  }

  productosArray : any;
  observable$ : any;
  productosArrayFiltrado : any = [];

  ngOnInit(){
    this.observable$ = this.firebase.traerProductos().subscribe(datos =>{
      this.productosArray = datos;
      this.productosArray.forEach((producto : any)=>{
        if(producto.stock > 0){
          this.productosArrayFiltrado.push(producto);
        }
      });
    });
  }

}