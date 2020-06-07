


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() // servicio
export class clienteService {

  constructor(private readonly _httpClient: HttpClient) { }



  editarcliente(actualiza: string, dataAEditar) { // editar
    
    const url = 'http://localhost:1337/clientes'
    return this._httpClient.put(url, actualiza);
  }

  
  eliminarCliente(url: string) { // eliminar
    return this._httpClient.delete(url);
  }


  creoCliente(daotosCrdencialesCrear) { //agregar datos
    const url = 'http://localhost:1337/clientes'
    return this._httpClient.post(url, daotosCrdencialesCrear);
  }


  listaCliente(datosCli) {   //obtenet datos
    const url = 'http://localhost:1337/clientes'
    return this._httpClient.get(url, datosCli);
  }



}