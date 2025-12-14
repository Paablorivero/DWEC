import { Component, inject } from '@angular/core';
import { ServicioRol } from '../../services/servicio-rol';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  ServicioRol = inject(ServicioRol);

}
