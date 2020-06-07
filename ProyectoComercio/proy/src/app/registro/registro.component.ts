import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  usuario = '';
  email = '';
  pass = '';
  vpass = '';
  confimarPassword = '';

  constructor(
    private readonly _router: Router,
    private readonly _RegistroService: RegisterService,  
  ) { }

  ngOnInit(): void {
  }


  ingresar(){

    if (this.pass === this.vpass) {
      this._RegistroService.crearUsuarios({
    
        usuario: this.usuario,
        email: this.email,
        password: this.pass,
       
        
        
        }).subscribe(
          (registroCreado)=> {
            console.log('registroCreado');
            console.log(registroCreado);
        alert('usuario agregado');
        this._router.navigate(['/login']);
          }
        )
     
    } else {
      alert('Contraseñas no validas');
      this._router.navigate(['/registro']);
    }
   
     
  }


}
