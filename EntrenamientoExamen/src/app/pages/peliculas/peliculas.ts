import { Component, inject } from '@angular/core';
import { CardPelicula } from "../../components/card-pelicula/card-pelicula";
import { IPelicula } from '../../interfaces/ipelicula';
import { ServicioPeliculas } from '../../services/servicio-peliculas';
import { ServicioRol } from '../../services/servicio-rol';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-peliculas',
  imports: [CardPelicula, RouterLink, FormsModule],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css',
})
export class Peliculas {
  arrayPeliculas: IPelicula[];
  ServicioPeliculas = inject(ServicioPeliculas);
  ServicioRol = inject(ServicioRol);
  genero!: string
  calificacion! : number
  constructor(){
    this.arrayPeliculas = [];

  }

  ngOnInit(): void{
    this.arrayPeliculas = this.ServicioPeliculas.getAll();
  }

  filtrarPelicula(){
    this.arrayPeliculas = this.ServicioPeliculas.getPeliculaByFilters(this.genero, this.calificacion);
    console.log(this.arrayPeliculas);
  }

  filtrarPeliculaCalificacion(){
    this.arrayPeliculas = this.ServicioPeliculas.getPeliculasByCalificacion(this.calificacion);
  }
}
