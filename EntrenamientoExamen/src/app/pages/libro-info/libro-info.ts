import { Component, inject } from '@angular/core';
import { ServicioLibros } from '../../services/servicio-libros';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { routes } from '../../app.routes';
import { ILibro } from '../../interfaces/ilibro';

@Component({
  selector: 'app-libro-info',
  imports: [RouterLink],
  templateUrl: './libro-info.html',
  styleUrl: './libro-info.css',
})
export class LibroInfo {

  SercicioLibro = inject(ServicioLibros);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  miLibro! : ILibro;

  constructor(){
    this.miLibro = {
            id: 0,
            titulo: '',
            autor: '',
            publicacion: 0,
            genero: '',
            calificacion: 0,
            resumen: '',
            imagen: ''
          };
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = +params.id;
      console.log(id)
      if(id != undefined){
        let libro = this.SercicioLibro.getLibroById(id);
        console.log(libro);
        if(libro != undefined){
          this.miLibro = {
            id: libro.id,
            titulo: libro.titulo,
            autor: libro.autor,
            publicacion: libro.publicacion,
            genero: libro.genero,
            calificacion: libro.calificacion,
            resumen: libro.resumen,
            imagen: libro.imagen
          };
          console.log(this.miLibro);
        }
      }
    })
  }
}
