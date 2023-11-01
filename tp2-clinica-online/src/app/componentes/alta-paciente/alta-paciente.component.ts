import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Paciente } from 'src/app/clases/paciente';

@Component({
  selector: 'app-alta-paciente',
  templateUrl: './alta-paciente.component.html',
  styleUrls: ['./alta-paciente.component.css']
})
export class AltaPacienteComponent 
{
  fotosPaciente : any[] = [];
  public form : FormGroup;
  botonesObraSocial : any[] = [];
  imagenPerfil1 : any = "../../../assets/img/silueta.png";
  imagenPerfil2 : any = "../../../assets/img/silueta.png";

  public get Nombre(){
    return this.form.get('nombre')?.value;
  }

  public get Apellido(){
    return this.form.get('apellido')?.value;
  }

  public get Edad(){
    return this.form.get('edad')?.value;
  }

  public get Dni(){
    return this.form.get('dni')?.value;
  }

  public get Especialidad(){
    return this.form.get('especialidad')?.value;
  }

  public get Email(){
    return this.form.get('email')?.value;
  }

  public get Clave(){
    return this.form.get('clave')?.value;
  }

  ngOnInit(){

  }

  constructor(private firebase : FirebaseService, private formBuilder : FormBuilder){
    this.form = formBuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      edad:['',[Validators.min(0), Validators.required]],
      dni:['',[Validators.min(0), Validators.required]],
      obraSocial:['',[Validators.required]],
      email:['',[Validators.required]],
      clave:['',[Validators.required]],
      fotos:['',[Validators.required]]
    });
  }

  async registrarPaciente(){
    if(this.fotosPaciente.length < 2){
      //si es menor que dos avisar que tienen que ser dos
    }
    else if(this.fotosPaciente.length == 2){
      //los datos del paciente tomados del formulario irían en el constructor de Paciente
      const paciente = new Paciente("Juan","Petre",24,42011714, "fedepetre22@gmail.com","222222", "OSDE", [{foto:'sasa'}]);
      await this.firebase.registrarPaciente(paciente, this.fotosPaciente);
    }
    else{
      //si es mayor a 2
    }

  }

  actualizarFotosPaciente(event : any){
    let fotos : FileList = event.target.files;
    this.fotosPaciente = [];

    for(let i=0; i<fotos.length; i++){
      let reader : FileReader = new FileReader();
      reader.readAsDataURL(fotos[i]);
      reader.onloadend = () => {
        this.fotosPaciente.push(reader.result);
        if(i==1){
          this.imagenPerfil1 = this.fotosPaciente[0];
          this.imagenPerfil2 = this.fotosPaciente[1];
        }
      }
    }


    console.log(this.fotosPaciente);    
  }

  cargarObraSocial(obraSocial : string){
    this.form.get('obraSocial')?.setValue(obraSocial);
  }

}
