import { Component, inject, Input } from '@angular/core';
import { ServicioUsuario } from '../../Services/servicio-usuario';
import { Router } from '@angular/router';
import { Iusuario } from '../../Interfaces/iusuario';

@Component({
  selector: 'app-card-usuario',
  imports: [],
  templateUrl: './card-usuario.html',
  styleUrl: './card-usuario.css',
})
export class CardUsuario {

  userService = inject(ServicioUsuario);
  router = inject(Router);
  @Input() miUsuario!: Iusuario;
}
