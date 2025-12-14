import { Component, inject, Input } from '@angular/core';
import { ServicioPeliculas } from '../../services/servicio-peliculas';
import { IPelicula } from '../../interfaces/ipelicula';
import { Router } from '@angular/router';
import { ServicioRol } from '../../services/servicio-rol';

@Component({
  selector: 'app-card-pelicula',
  imports: [],
  templateUrl: './card-pelicula.html',
  styleUrl: './card-pelicula.css',
})
export class CardPelicula {
  ServicioPeliculas = inject(ServicioPeliculas);
  ServicioRol = inject(ServicioRol);
  router = inject(Router);
  @Input() miPelicula!: IPelicula;

  verMas(pelicula: IPelicula){
      this.router.navigate(['/pelicula',pelicula.id]);
  }

  eliminarPelicula(pelicula : IPelicula){
    this.ServicioPeliculas.deleteByTitle(pelicula.titulo);
  }

  actualizarPelicula(pelicula: IPelicula){
    this.router.navigate(['/editarpelicula',pelicula.id]);
  }
}
