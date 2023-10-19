import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule} from '@angular/fire/compat';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { FormularioAltaProductoComponent } from './componentes/formulario-alta-producto/formulario-alta-producto.component';
import { ListadoPaisesComponent } from './componentes/listado-paises/listado-paises.component';
import { ListadoProductosComponent } from './componentes/listado-productos/listado-productos.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { DetalleCompletoProductoPaisComponent } from './componentes/detalle-completo-producto-pais/detalle-completo-producto-pais.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { ProductosListadoPublicoComponent } from './componentes/productos-listado-publico/productos-listado-publico.component'; // Importa BrowserAnimationsModule

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaProductoComponent,
    FormularioAltaProductoComponent,
    ListadoPaisesComponent,
    ListadoProductosComponent,
    DetalleProductoComponent,
    DetalleCompletoProductoPaisComponent,
    DetallePaisComponent,
    ProductosListadoPublicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
