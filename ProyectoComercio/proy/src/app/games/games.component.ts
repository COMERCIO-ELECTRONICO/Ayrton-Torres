import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/Router';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  refresh(): void {
    window.location.reload();
}

  string;

  constructor(

    private readonly _RegistroService: RegisterService,
    private readonly _router: Router,
   
  ) { }

  ngOnInit(): void {
 
    this._RegistroService.listarpersonas('http://localhost:1337/usuarios')
    .subscribe((ver)=>{

      this.string = ver;

    })


  }



/*editar(){
  this._RegistroService.metodoPut('http://localhost:1337/usuarios')
  .subscribe((edita)=>{

    this.string = edita;
  })*/

//}

  eliminar(name){
    this._RegistroService.metodoDelete((`http://localhost:1337/usuarios/${name.id}`))
    .subscribe((datos)=>{

      this.string = datos;

      alert('dato borrado')
      this.refresh();
     
    })
    }


}
