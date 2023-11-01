import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AltaEspecialistaComponent } from './componentes/alta-especialista/alta-especialista.component';
import { AltaPacienteComponent } from './componentes/alta-paciente/alta-paciente.component';

const routes: Routes = [
  {path:'bienvenida',title:'Ingreso Clínica Online', component:BienvenidaComponent},
  {path:'registro-especialista',title:'Alta especialista', component:AltaEspecialistaComponent},
  {path:'registro-paciente',title:'Alta paciente', component:AltaPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
