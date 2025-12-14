import { Component, inject } from '@angular/core';
import { ServicioRol } from '../../services/servicio-rol';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
rol: string;
  ServicioRol = inject(ServicioRol);

  constructor(){
    this.rol = "";
  }

  admin(){
    this.rol = this.ServicioRol.cambiarAdmin();
  }

  usuario(){
    this.rol = this.ServicioRol.cambiarUsuario();
  }
}
