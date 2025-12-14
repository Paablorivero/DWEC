import { Component, inject } from '@angular/core';
import { ServicioPeliculas } from '../../services/servicio-peliculas';
import { IPelicula } from '../../interfaces/ipelicula';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pelicula-info',
  imports: [RouterLink],
  templateUrl: './pelicula-info.html',
  styleUrl: './pelicula-info.css',
})
export class PeliculaInfo {
  Servicio = inject(ServicioPeliculas);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  miPelicula! : IPelicula;

  constructor(){
    this.miPelicula = {
            id: 0,
            titulo: '',
            director: '',
            estreno: 0,
            genero: '',
            calificacion: 0,
            sinopsis: '',
            imagen: ''
          };
  }
  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = +params.id;
      console.log(id)
      if(id != undefined){
        let pelicula = this.Servicio.getPeliculaById(id);
        console.log(pelicula);
        if(pelicula != undefined){
          this.miPelicula = {
            id: pelicula.id,
            titulo: pelicula.titulo,
            director: pelicula.director,
            estreno: pelicula.estreno,
            genero: pelicula.genero,
            calificacion: pelicula.calificacion,
            sinopsis: pelicula.sinopsis,
            imagen: pelicula.imagen
          };
          console.log(this.miPelicula);
        }
      }
    })
  }
}
