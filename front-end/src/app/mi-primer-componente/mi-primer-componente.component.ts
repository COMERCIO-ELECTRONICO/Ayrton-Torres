import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';
//@nombreDecorador() decorador
@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit {

@Input() titulo: string;
@Input() nombreBoton: string;
@Input() imagenPath: string;
@Input() datos;

@Output() saludoHijo = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

 SALUDAR(){
   alert('QUE MAS MIJO!!');
   this.saludoHijo.emit('saludo de tu hijo');
 }

}
