import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RegistroComponent } from './registro/registro.component';
import { GamesComponent } from './games/games.component';


import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { clienteService } from './services/cliente.service';
import { ProducService} from './services/pro.service';



import { ClientesComponent } from './clientes/clientes.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductoComponent } from './producto/producto.component';
import { EditaCliComponent } from './edita-cli/edita-cli.component';
import { EditarUsuariosComponent } from './editar-usuarios/editar-usuarios.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoEncontradoComponent,
    IniciarSesionComponent,
    LoginComponent,
    RegistroComponent,
    GamesComponent,
    ClientesComponent,
    NosotrosComponent,
    ProductoComponent,
    EditaCliComponent,
    EditarUsuariosComponent,
   
 
  ],
  imports:
   [BrowserModule, 
    AppRoutes, 
    BrowserAnimationsModule,
     ButtonModule,
      FormsModule,
      HttpClientModule
    ],
  providers: [
    LoginService,
    RegisterService,
    
    clienteService,
    clienteService,
    ProducService
    

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}