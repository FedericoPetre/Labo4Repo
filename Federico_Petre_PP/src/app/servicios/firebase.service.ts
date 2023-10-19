import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public flagSeLogeo : boolean;

  constructor(private auth : AngularFireAuth, private notificacion : ToastrService, private firestore : AngularFirestore, private router : Router) {
    this.flagSeLogeo = false;
  }

  ingresar(email: string, clave : string){

    this.auth.signInWithEmailAndPassword(email, clave).then((response:any)=>{
      this.notificacion.success("Has ingresado existosamente!","Iniciar Sesión");
      this.flagSeLogeo = true;
      this.router.navigateByUrl('/bienvenida');
    }).catch((error:any)=>{
      let tipoError = error.code;
      let mensaje = "Error ";
      switch (tipoError) {
        case "auth/invalid-email":
          mensaje += "Correo no válido";
          break;
        case "auth/user-disabled":
          mensaje += "Cuenta deshabilitada";
          break;
        case "auth/user-not-found":
          mensaje += "El usuario no existe";
          break;
        case "auth/wrong-password":
          mensaje += "Contraseña incorrecta";
          break;
      }

      this.notificacion.error(mensaje,"Error al iniciar sesión");
      console.log(mensaje);
    });
  }

  salir(){
    this.auth.signOut().then((respuesta:any)=>{
      this.flagSeLogeo = false;
      this.notificacion.info("Has cerrado tu sesión","Cerrar Sesión");
      this.router.navigateByUrl('/bienvenida');
    }).catch((error:any)=>{
      this.notificacion.error("Error al cerrar sesión");
    })
  }


  guardarProducto(codigo: string, descripcion: string, precio: number, stock: number, paisOrigen: string, esComestible: boolean) {   
    const productoJSON = {
      codigo: codigo,
      descripcion: descripcion,
      precio: precio,
      stock: stock,
      pais: paisOrigen,
      esComestible: esComestible
    };
  
    this.firestore.collection("Productos").add(productoJSON)
      .then((docRef) => {
        console.log("Registro agregado con ID: ", docRef.id);
        console.log("Datos del producto:", productoJSON);
        this.notificacion.success("Producto agregado exitosamente","Alta Producto");
      })
      .catch((error) => {
        console.error("Error al agregar el producto: ", error);
        this.notificacion.error("Error al agregar el producto","Alta Producto");
      });
  }


  traerProductos() {
    const coleccion = this.firestore.collection('Productos' , ref =>
      ref.orderBy("codigo", "asc")
    );
    return coleccion.valueChanges();
  }
  
}
