import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioRol {
  rol: string;

  constructor(){
    this.rol = "usuario"
  }

  cambiarAdmin(): string{
    this.rol = 'admin'
    return this.rol;
  }

  cambiarUsuario(): string{
    this.rol = 'usuario';
    return this.rol;
  }
}
