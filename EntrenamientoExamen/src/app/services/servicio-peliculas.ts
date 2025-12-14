import { Injectable } from '@angular/core';
import { IPelicula } from '../interfaces/ipelicula';

@Injectable({
  providedIn: 'root',
})
export class ServicioPeliculas {
  
  private currency:string;
  private arraypeliculas: IPelicula[];
  private id: number;


  constructor(){
    this.currency ="";
    this.arraypeliculas = [];
    this.id = 21


    fetch('http://localhost:8080/api/peliculas')
    .then(response => response.json())
    .then(data => {
      this.currency = data.currency;
      data.peliculas.forEach((pelicula: IPelicula) => {
        this.arraypeliculas.push(pelicula);
      });
    });
  }

  getAll() : IPelicula[]{
    return this.arraypeliculas;
  }

  getPeliculaById(id : number): IPelicula | undefined{
    return this.arraypeliculas.find(p => p.id === id);
  }

  deleteByTitle(titulo: string): void{
    let i = this.arraypeliculas.findIndex(s => s.titulo === titulo);
    if (i != -1 && i >= 0 && i < this.arraypeliculas.length){
      this.arraypeliculas.splice(i, 1);
    }
  }

  insertPelicula(pelicula: IPelicula): void{
    if(!this.arraypeliculas.includes(pelicula)&& pelicula != null){
      pelicula.id = this.id;
      this.arraypeliculas.push(pelicula);
      this.id++;
    }
  }

  updatePelicula(pelicula: IPelicula): void{
    let i = this.arraypeliculas.findIndex(p => p.id === pelicula.id);
    if(i != -1 && i >= 0 && i < this.arraypeliculas.length){
      this.arraypeliculas.splice(i, 1);
    }

    this.arraypeliculas.push(pelicula);
  }

  getPeliculaByFilters(filtro: string, calificacion: number){
    return this.arraypeliculas.filter(p => p.genero.includes(filtro) && p.calificacion >= calificacion);
  }

  getPeliculasByCalificacion(calificacion: number){
    return this.arraypeliculas.filter(p => p.calificacion >= calificacion)
  }
}
