import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { clienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  
  refresh(): void {
    window.location.reload();
}

  string;
  credencial ='';
  nombre ='';
  direccion='';
  telefono ='';


  constructor(
    private readonly _router: Router,
    private readonly _Registrocliente: clienteService,  

  ) { }

  ngOnInit(): void {

    this._Registrocliente.listaCliente('http://localhost:1337/clientes')
    .subscribe((listas)=>{

     // console.log(JSON.stringify(listas[1]['id']));

         

      this.string = listas;
      this.string=this.string;
    })

  }

  agregar(){
     this._Registrocliente.creoCliente({
          
       credencial: this.credencial,
       nombre:this.nombre,
       direccion: this.direccion,
       telefono: this.telefono
        
        }).subscribe(
          (registroCreado)=> {
            console.log('registroCreado');
            console.log(registroCreado);
            alert('Cliente Agregado')
            this.refresh();
        
          }
        )
         
  }


  verificaUsuario(){

    this._Registrocliente.listaCliente('http://localhost:1337/clientes?credencial='+this.credencial)
 
    .subscribe((resultado) => {
   
   console.log(resultado);
   
  if (JSON.stringify(resultado)=='[]') {
    
  // alert('usuario no existe, verifique !!');
  // this._router.navigate(['/login']);
  alert('usuario');

  }else{

 if(resultado[0]['credencial']){
 }
  console.log('bienvenidp');
  alert('ya existe intente con otro usuario');
  this.agregar();
      this.refresh();
  }
    })
  }





  delete(valor){
   
    this._Registrocliente.eliminarCliente((`http://localhost:1337/clientes/${valor}`))
    
    .subscribe((datos)=>{

      this.string = datos;
      alert('dato eliminado')
      this.refresh();
     
    })
    }


    Editar(dato){
      console.log('valor name')
      console.log(dato);
      this._router.navigate(['editacli/'+ dato])
      
    }

    


}

