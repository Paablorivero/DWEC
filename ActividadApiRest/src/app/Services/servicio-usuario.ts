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

  async getAllUsers(): Promise<Iusuario[]> {
    const resp = await lastValueFrom(this.httpClient.get<IApi>(this.baseUrl));
    return resp.results;
  }

  insertUser(usuario: Iusuario): Promise<Iusuario> {
    return lastValueFrom(this.httpClient.post<Iusuario>(this.baseUrl, usuario));
  }
}
