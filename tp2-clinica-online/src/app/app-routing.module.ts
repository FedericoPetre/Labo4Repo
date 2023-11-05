import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { ComponenteHabilitacionesComponent } from './componentes/componente-habilitaciones/componente-habilitaciones.component';
import { AltaAdminComponent } from './componentes/alta-admin/alta-admin.component';

const routes: Routes = [
  {path:'', redirectTo:'bienvenida', pathMatch:'full'},
  {path:'bienvenida',title:'Ingreso Clínica Online', component:BienvenidaComponent},
  { path: 'registro', loadChildren: () => import('./modulos/registro/registro.module').then(m => m.RegistroModule) },
  {path:'login',component:LoginComponent, title:'Ingresar - Clínica'},
  {path:'habilitaciones',component:ComponenteHabilitacionesComponent},
  {path:"alta-admin",component:AltaAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
