import { Component, inject, Input } from '@angular/core';
import { ServicioPeliculas } from '../../services/servicio-peliculas';
import { Router } from '@angular/router';
import { ILibro } from '../../interfaces/ilibro';
import { ServicioRol } from '../../services/servicio-rol';
import { ServicioLibros } from '../../services/servicio-libros';

@Component({
  selector: 'app-card-libro',
  imports: [],
  templateUrl: './card-libro.html',
  styleUrl: './card-libro.css',
})
export class CardLibro {

  ServicioLibro = inject(ServicioLibros);
  ServicioRol = inject(ServicioRol);
  router = inject(Router);

  @Input() miLibro!: ILibro;

  eliminarLibro(libro: ILibro) {
    this.ServicioLibro.deleteByTitle(libro.titulo);
  }
  verMas(libro: ILibro) {
    this.router.navigate(['/libros',libro.id]);
  }

  actualizarLibro(libro: ILibro) {
    this.router.navigate(['/editarlibro',libro.id]);
  }
}
