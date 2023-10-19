import { Component, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent {
  constructor(private firebase : FirebaseService){

  }

  @Output() eventItem = new EventEmitter<any>();

  productosArray : any;
  observable$ : any;

  ngOnInit(){
    this.observable$ = this.firebase.traerProductos().subscribe(datos =>{
      this.productosArray = datos;
    });
  }

  asignarProducto(producto:any){
    this.eventItem.emit(producto);
  }

}
