import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginService } from '../services/login.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  pass = '';
  constructor(

    private readonly _router: Router,
    private readonly _loginService: LoginService,  
  ) { }

  ngOnInit(): void {
  }

  

  
  ingresar(){

    this._loginService.metodoGet('http://localhost:1337/usuarios?email='+this.email +'&password='+this.pass)
 
    .subscribe((resultado) => {
   
   console.log(resultado);
   
  if (JSON.stringify(resultado)=='[]') {
    
   alert('usuario no existe, verifique !!');
  
   this._router.navigate(['/login']);
this.email = '';
this.pass ='';

  }else{

 if(resultado[0]["nombre"]){
   
 }
 
  alert('bienvenidos!!!')
      this._router.navigate(['/games', 'perfil']);
  }
    })
  }

}
