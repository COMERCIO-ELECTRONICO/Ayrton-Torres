import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
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
  ) { }

  ngOnInit(): void {
  }

  ingresar(){
alert ('hola'+this.email + this.pass);

if (this.pass === '1234') {
  alert(this.email);
  if (this.email === 'ricardoyasig@hotmail.com') {
    alert('es estudiante');

    this._router.navigate(['/games', 'perfil']);
    // localhost:9000/estudiante/perfil
  }
} else {
  alert('no ingreso');
}

  }


}
