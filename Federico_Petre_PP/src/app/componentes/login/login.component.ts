import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private firebaseService : FirebaseService){}
  
  ngOnInit(): void {
    
  }

  correo : string = "";
  clave : string = "";

  private Limpiar() {
    this.correo="";
    this.clave="";
  }

  async Ingresar() {

    this.firebaseService.ingresar(this.correo, this.clave);
    this.Limpiar();
  }

  cargarDatosAdmin(){
    this.correo="admin@admin1.com";
    this.clave="222222";
  }

  cargarDatosEmpleado(){
    this.correo="empleado@empleado.com";
    this.clave="111111";
  }

}
