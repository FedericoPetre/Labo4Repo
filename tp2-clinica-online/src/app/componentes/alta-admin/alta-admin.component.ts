import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servicios/firebase.service';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-alta-admin',
  templateUrl: './alta-admin.component.html',
  styleUrls: ['./alta-admin.component.css']
})
export class AltaAdminComponent {

  fotoAdmin : any[] = [];
  public form : FormGroup;
  imagenPerfil : any = "../../../assets/img/silueta.png";
  botonesEspecialidad : any[] = [];
  obser$: any;

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
    this.obser$ = this.firebase.traerAdminsRegistrados().subscribe(admins=>{
      this.cargarAdmins(admins);
    });
  }

  ngOnDestroy() {
    if (this.obser$) 
    {
      this.obser$.unsubscribe();
    }
  }


  constructor(private firebase : FirebaseService, private formBuilder : FormBuilder){
    this.form = formBuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      edad:['',[Validators.min(0), Validators.required]],
      dni:['',[Validators.min(0), Validators.required]],
      especialidad:['',[Validators.required]],
      email:['',[Validators.required]],
      clave:['',[Validators.required]],
      foto:['',[Validators.required]]
    });
  }


  async registrarAdmin(){
    const admin = new Persona(this.Nombre, this.Apellido, this.Edad, this.Dni, this.Email, this.Clave);
    console.log(JSON.stringify(admin));
    await this.firebase.registrarAdmin(admin, this.fotoAdmin);
    this.limpiarTodo();
  }

  actualizarfotoAdmin(event : any){
    let fotos : FileList = event.target.files;
    this.fotoAdmin = [];

    let reader : FileReader = new FileReader();
    reader.readAsDataURL(fotos[0]);
    reader.onloadend = () => {
      this.fotoAdmin.push(reader.result);
      this.imagenPerfil = this.fotoAdmin[0];
    }


    console.log(this.fotoAdmin);    
  }

  cargarEspecialidad(especialidad : string){
    this.form.get('especialidad')?.setValue(especialidad);
  }

  cargarAdmins(arrayadmins: any[]){
    let arrayadminsAux : any = [];
    
    for(let i=0; i<arrayadmins.length;i++){
      if(!this.determinarSiLaEspecialidadEsta(arrayadminsAux, arrayadmins[i].especialidad)){
        arrayadminsAux.push(
          {especialidad:arrayadmins[i].especialidad}
        );
      }
    }

    this.botonesEspecialidad = arrayadminsAux;
    
  }


  determinarSiLaEspecialidadEsta(arrayadmins : any[], especialidad : string){
    let flagLaEspecialidadExiste : boolean = false;

    for(let i=0; i<arrayadmins.length; i++){
      if(arrayadmins[i].especialidad == especialidad){
        flagLaEspecialidadExiste = true;
        break;
      }
    }
    return flagLaEspecialidadExiste;
  }

  limpiarTodo(){
    this.form.setValue({
      nombre:'',
      apellido:'',
      edad:'',
      dni:'',
      especialidad:'',
      email:'',
      clave:'',
      foto:''
    });
    this.imagenPerfil = "../../../assets/img/silueta.png";
  }
}
