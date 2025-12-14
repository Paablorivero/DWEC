import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Iusuario } from '../Interfaces/iusuario';

@Injectable({
  providedIn: 'root',
})
export class ServicioUsuario {
  
  private baseUrl: string = 'https://peticiones.online/api/users';
  httpClient = inject(HttpClient);

  constructor(){}

  getAllUsers(): Observable<Iusuario[]> {
    return this.httpClient.get<Iusuario[]>(this.baseUrl);
  }
}
