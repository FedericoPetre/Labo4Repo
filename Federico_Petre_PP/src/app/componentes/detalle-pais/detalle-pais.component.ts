import { Component, Input } from '@angular/core';
import { PeticionHTTPService } from 'src/app/servicios/peticion-http.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent {

@Input() pais : any;

constructor(private xhttp: PeticionHTTPService){
  
}

}
