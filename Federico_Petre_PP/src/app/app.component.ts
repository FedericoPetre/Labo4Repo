import { Component} from '@angular/core';
import { FirebaseService } from './servicios/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Federico_Petre_PP';

  constructor(private firebase : FirebaseService){

  }

  salir(){
    if(this.firebase.flagSeLogeo){
      this.firebase.salir();
    }
  }

}
