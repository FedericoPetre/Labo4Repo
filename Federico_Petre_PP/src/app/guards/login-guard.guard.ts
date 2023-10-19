import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const flagSeLogeo = inject(FirebaseService).flagSeLogeo;

  if(!flagSeLogeo){
    inject(Router).navigate(['login']);
  }

  return flagSeLogeo;
};

export const loginGuardSiYaEstaLogueado: CanActivateFn = (route, state) => {
  const flagSeLogeo = inject(FirebaseService).flagSeLogeo;
  return !flagSeLogeo;
};