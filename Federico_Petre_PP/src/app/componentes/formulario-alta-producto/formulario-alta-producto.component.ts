import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-formulario-alta-producto',
  templateUrl: './formulario-alta-producto.component.html',
  styleUrls: ['./formulario-alta-producto.component.css']
})
export class FormularioAltaProductoComponent {

  public form : FormGroup;
  @Input() pais : string = '';

  public constructor(private formBuilder : FormBuilder, private firebase : FirebaseService){
    this.form = formBuilder.group({
      codigo:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      precio:[0,[Validators.min(0), Validators.required]],
      stock:[0,[Validators.min(0), Validators.required]],
      paisControl:[this.pais,[Validators.required]],
      esComestible:[true,[Validators.required]]
    });
  }

  agregarProducto(){
    const producto = {
      codigo:this.form.get('codigo')?.value,
      descripcion:this.form.get('descripcion')?.value,
      precio:this.form.get('precio')?.value,
      stock:this.form.get('stock')?.value,
      pais:this.form.get('paisControl')?.value,
      esComestible:this.form.get('esComestible')?.value,
    };

    this.firebase.guardarProducto(producto.codigo, producto.descripcion, producto.precio, producto.stock, producto.pais, producto.esComestible);
    this.limpiarTodo();
  }

  limpiarTodo(){
    this.form.setValue({
      codigo:'',
      descripcion:'',
      precio:0,
      stock:0,
      paisControl:'',
      esComestible:false
    });
  }

}
