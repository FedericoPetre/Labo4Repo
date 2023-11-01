import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AltaPacienteComponent } from './componentes/alta-paciente/alta-paciente.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AltaEspecialistaComponent } from './componentes/alta-especialista/alta-especialista.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    AltaPacienteComponent,
    AltaEspecialistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(()=>getStorage()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
