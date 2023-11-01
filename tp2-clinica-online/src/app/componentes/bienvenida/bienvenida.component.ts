import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Especialista } from 'src/app/clases/especialista';
import { Paciente } from 'src/app/clases/paciente';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {
  
  email : string = "admin1@admin.com";
  clave : string = "111111";

  constructor(private firebase : FirebaseService){}

  async ingresar(){
    await this.firebase.ingresar(this.email, this.clave);
  }


}
