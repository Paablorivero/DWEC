import { Component, inject } from '@angular/core';
import { ILibro } from '../../interfaces/ilibro';
import { ServicioLibros } from '../../services/servicio-libros';
import { CardLibro } from "../../components/card-libro/card-libro";
import { ServicioRol } from '../../services/servicio-rol';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libros',
  imports: [CardLibro, RouterLink],
  templateUrl: './libros.html',
  styleUrl: './libros.css',
})
export class Libros {
  arrayLibros: ILibro[];
  ServicioLibros = inject(ServicioLibros);
  ServicioRol = inject(ServicioRol);

  constructor(){
    this.arrayLibros = [];
  }

  ngOnInit(): void{
    this.arrayLibros = this.ServicioLibros.getAll();
  }
}
