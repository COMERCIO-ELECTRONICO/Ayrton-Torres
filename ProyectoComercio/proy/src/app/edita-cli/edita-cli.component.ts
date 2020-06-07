
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';
import { clienteService } from '../services/cliente.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-edita-cli',
  templateUrl: './edita-cli.component.html',
  styleUrls: ['./edita-cli.component.css']
})
export class EditaCliComponent implements OnInit {

 
  contenedor;


id;
credencial='';
nombre='';
direccion='';
telefono='';


  constructor(
    private readonly router: Router,
    private _route: ActivatedRoute,
    private readonly _Registrocliente: clienteService,  
  ) { }

  ngOnInit(): void {

this.contenedor=this._route.snapshot.paramMap.get('id')
//this.nombre =this.contenedor;

this._Registrocliente.listaCliente('http://localhost:4200/cliente?id='+this.contenedor)
.subscribe((imprime)=>{
this.id = imprime[0]['id'];
this.credencial = imprime[0]['credencial']
this.nombre = imprime[0]['nombre']
this.direccion = imprime[0]['direccion']
this.telefono = imprime[0]['telefono']

})

  }

  
  guardar(){
    this._Registrocliente.editarcliente('http://localhost:1337/clientes/'+this.id,{
      credencial:this.credencial,
      nombre:this.nombre,
      direccion:this.direccion,
      telefono:this.telefono,
      }).subscribe((result)=>{})
      alert('Usuario editado EXITOSO')
      this.router.navigate(['clientes'])
  }
}
