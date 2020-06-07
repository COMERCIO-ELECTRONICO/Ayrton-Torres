

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() // servicio
export class ProducService {
  constructor(private readonly _httpClient: HttpClient) {}

   
  editar(url: string, dataAEditar) { // editar
    return this._httpClient.put(url, dataAEditar);

}
eliminar(url: string) { // eliminar
    return this._httpClient.delete(url);
  }


  creoProductos(cpro){
    const url ='http://localhost:1337/producto'
    return this._httpClient.post(url, cpro);
    }
  
  
    lisProduc(lisprod){
      const url ='http://localhost:1337/producto'
      return this._httpClient.get(url, lisprod);
      }





}