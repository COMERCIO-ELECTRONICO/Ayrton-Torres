import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { GamesComponent } from './games/games.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductoComponent } from './producto/producto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EditaCliComponent } from './edita-cli/edita-cli.component';


const rutas: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
  },

  {
    path: 'EditaPerfil',
    loadChildren: () =>
    import('./perfiles/perfiles.module')
      .then(mod => mod.PerfilesModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  
  {
    path: 'games/perfil',
    component: GamesComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: ':editacli/:id',
    component: EditaCliComponent,
  },
  {
    path: 'productos',
    component: ProductoComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NoEncontradoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutes {}