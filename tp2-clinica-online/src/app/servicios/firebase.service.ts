import { Injectable } from '@angular/core';
import { Paciente } from '../clases/paciente';
import { Especialista } from '../clases/especialista';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  storageRef = firebase.app().storage().ref();

  constructor(private auth : AngularFireAuth, private store : AngularFirestore, private storage : Storage) {}

  async ingresar(email : string, clave : string){
    await this.auth.signInWithEmailAndPassword(email, clave).then((respuesta:any)=>{
     // console.log("entró acá");
    }).catch((error:any)=>{
      console.log(error.code);
    })
  }

  async registrarPaciente(paciente:Paciente,  imagenes : any[]){
    this.auth.createUserWithEmailAndPassword(paciente.email, paciente.clave).then(async (respuesta:any)=>{
      let urlImagenes : any[] = [];

      await this.subirImagen("Pacientes/"+paciente.email+"/"+0, imagenes[0]).then((url)=>{
        urlImagenes.push(url);
      });

      await this.subirImagen("Pacientes/"+paciente.email+"/"+1, imagenes[1]).then((url)=>{
        urlImagenes.push(url);
      });

      const uId = respuesta.user.uid;
      const documento = this.store.doc("Pacientes/"+uId);
      documento.set({
        nombre:paciente.nombre,
        apellido:paciente.apellido,
        edad:paciente.edad,
        dni:paciente.dni,
        obraSocial:paciente.obraSocial,
        imagenes:urlImagenes
      });
    
    }).catch((error:any)=>{
      console.log(error);
    });
  }

  async registrarEspecialista(especialista : Especialista,  imagenes : any[]){
    this.auth.createUserWithEmailAndPassword(especialista.email, especialista.clave).then(async (respuesta:any)=>{
      let urlImagenes : any[]=[];

      await this.subirImagen("Especialistas/"+especialista.email+"/"+0, imagenes[0]).then((url)=>{
        urlImagenes.push(url);
      });

      const uId = respuesta.user.uid;
      const documento = this.store.doc("Especialistas/"+uId);
      documento.set({
        nombre:especialista.nombre,
        apellido:especialista.apellido,
        edad:especialista.edad,
        dni:especialista.dni,
        especialidad:especialista.especialidad,
        imagen:urlImagenes
      });
    
    }).catch((error:any)=>{
      console.log(error);
    });
  }

  async subirImagen(nombreImagen: string, imagenBase64 : any){
    try{
        let respuesta = await this.storageRef.child(nombreImagen).putString(imagenBase64,'data_url');
        //console.log("Entró acá al subir imagen BIEN");
        return await respuesta.ref.getDownloadURL();
    }catch(error:any){
       console.log(error);
   // console.log("Entró acá al subir imagen ERROR"+error);
      return null;
    }
  }

  traerEspecialistasRegistrados(){
    const especialistas = this.store.collection('Especialistas');
    return especialistas.valueChanges();
  }
}
