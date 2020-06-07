import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { EditarUsuariosComponent } from '../perfiles/editar-usuarios/editar-usuarios.component';


const rutas: Routes = [
  {
    path: ':editar-usuario',
    component: EditarUsuariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  providers: [],
  exports: [RouterModule],
})

export class UsuarioRoutes{}