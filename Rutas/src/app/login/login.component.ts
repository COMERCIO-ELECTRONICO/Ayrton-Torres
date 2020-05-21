import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  constructor() {}
   nombre = '';
   apellido = '';
   ciudad = '';
    email = '';
   contrasena = '';
   contrasenac = '';
   

  ngOnInit(): void {

  }

  obtenerFormulario(formulario) {
    console.log(formulario);
    alert( 
      'nombre: '  +
      formulario.controls.nombre.value + 
      
      '\n apellido: ' +
    formulario.controls.apellido.value +
      '\n ciudad: ' +
      formulario.controls.ciudad.value +
      '\n correo: ' +
        formulario.controls.email.value +
     '\n password: ' +
      formulario.controls.contrasena.value +
      '\n Confirm_password: ' +
      formulario.controls.contrasenac.value
    );
  }
  
}