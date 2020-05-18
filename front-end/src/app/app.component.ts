import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  tituloPadre = 'Soy tu Padre';
  nombreBotonPadre = 'alertar!!!!!';
  imagenPadre = 'https://images7.memedroid.com/images/UPLOADED128/56fac5463ee89.jpeg';

  datosHijo = {
  tituloPadre : 'Soy tu Padre bro',
  nombreBotonPadre : 'alertar!!!!!',
  imagenPadre : 'https://images7.memedroid.com/images/UPLOADED128/56fac5463ee89.jpeg'
  };
  
  obtenerRespuestaHijo(evento){
    console.log(evento)
  }

}

