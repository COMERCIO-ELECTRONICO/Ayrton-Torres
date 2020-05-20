import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly _router: Router,

    private readonly _router2: Router
  ) { }

  ngOnInit(): void {
  }

  irAUsuarioListar() {
    this._router.navigate(['/usuario', 'listar']);
  }

  irAPokemonGoEdit() {
    this._router2.navigate(['/pokemon', 'editar']);
  }
}
