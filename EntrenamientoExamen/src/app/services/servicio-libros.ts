import { Injectable } from '@angular/core';
import { ILibro } from '../interfaces/ilibro';

@Injectable({
  providedIn: 'root',
})
export class ServicioLibros {
    private currency:string;
    private arrayLibros: ILibro[];
    private id: number;

  
    constructor(){
      this.currency ="";
      this.arrayLibros = [];
      this.id = 26;
  
      fetch('http://localhost:8081/api/libros')
      .then(response => response.json())
      .then(data => {
        this.currency = data.currency;
        data.libros.forEach((pelicula: ILibro) => {
          this.arrayLibros.push(pelicula);
        });
      });
    }
  
    getAll() : ILibro[]{
      console.log(this.arrayLibros)
      return this.arrayLibros;
    }

    getLibroById(id : number): ILibro | undefined{
      return this.arrayLibros.find(l => l.id === id);
    }

    deleteByTitle(titulo: string): void{
    let i = this.arrayLibros.findIndex(l => l.titulo === titulo);
    if (i != -1 && i >= 0 && i < this.arrayLibros.length){
      this.arrayLibros.splice(i, 1);
    }
  }

  insertLibro(libro: ILibro): void{
      if(!this.arrayLibros.includes(libro) && libro != null){
        libro.id = this.id;
        this.arrayLibros.push(libro);
        this.id++;
      }
  }

  updateLibro(libro: ILibro): void{
    let i = this.arrayLibros.findIndex(l => l.id === libro.id)

    if(i != -1 && i >= 0 && i < this.arrayLibros.length){
      this.arrayLibros.splice(i, 1);
    }

    this.arrayLibros.push(libro);
  }
}
