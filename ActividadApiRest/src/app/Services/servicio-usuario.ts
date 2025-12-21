import { Iusuario } from './../Interfaces/iusuario';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { IApi } from '../Interfaces/i-api';

@Injectable({
  providedIn: 'root',
})

export class ServicioUsuario {

  private baseUrl: string = 'https://peticiones.online/api/users';
  httpClient = inject(HttpClient);

  constructor(){}

  async getAllUsersPage(page: number = 1): Promise<IApi> {  
    const resp = await lastValueFrom(this.httpClient.get<IApi>(`${this.baseUrl}?page= ${page}`)); 
    return resp;
  }

  insertUser(usuario: Iusuario): Promise<Iusuario> {
    return lastValueFrom(this.httpClient.post<Iusuario>(this.baseUrl, usuario));
  }

  getUserById(id : string): Promise<Iusuario>{
    return lastValueFrom(this.httpClient.get<Iusuario>(this.baseUrl + '/' + id));
  }

  updateUser(usuario: Iusuario): Promise<Iusuario>{
    return lastValueFrom(this.httpClient.put<Iusuario>(`${this.baseUrl}/${usuario._id}`, usuario));
  }

  deleteById(_id: string): Promise<Iusuario>{
    return lastValueFrom(this.httpClient.delete<Iusuario>(`${this.baseUrl}/${_id}`));
  }
}
