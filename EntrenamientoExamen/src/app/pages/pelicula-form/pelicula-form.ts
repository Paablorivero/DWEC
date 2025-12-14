import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioPeliculas } from '../../services/servicio-peliculas';
import { IPelicula } from '../../interfaces/ipelicula';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pelicula-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './pelicula-form.html',
  styleUrl: './pelicula-form.css',
})
export class PeliculaForm {

  peliculaForm: FormGroup;
  servicioPelicula = inject(ServicioPeliculas);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  isNew: boolean;

  constructor(){
    this.isNew = true;
    this.peliculaForm = new FormGroup({
      id: new FormControl(null, []),
      titulo: new FormControl(null, [Validators.required]),
      director: new FormControl(null, [Validators.required]),
      estreno: new FormControl(null, [Validators.required]),
      genero: new FormControl(null, [Validators.required]),
      calificacion: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
      sinopsis: new FormControl(null, [Validators.required]),
      imagen: new FormControl(null, [Validators.required]),
    }, []);
  }

  getDataForm(){
    let pelicula = this.peliculaForm.value as IPelicula;

    if(this.isNew){
      pelicula.id = -1;
      this.servicioPelicula.insertPelicula(pelicula);
    }else{
      this.servicioPelicula.updatePelicula(pelicula);
    }

    this.peliculaForm.reset();
    this.router.navigate(['peliculas'])
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params: any) => {
      let id: number = +params.id;
      if (id != undefined){
        let miPelicula = this.servicioPelicula.getPeliculaById(id);
        console.log(miPelicula)
        if(miPelicula != undefined){
          this.isNew = false;
          this.peliculaForm = new FormGroup({
            id: new FormControl(miPelicula.id, []),
            titulo: new FormControl(miPelicula.titulo, [Validators.required]),
            director: new FormControl(miPelicula.director, [Validators.required]),
            estreno: new FormControl(miPelicula.estreno, [Validators.required]),
            genero: new FormControl(miPelicula.genero, [Validators.required]),
            calificacion: new FormControl(miPelicula.calificacion, [Validators.required, Validators.min(0), Validators.max(10)]),
            sinopsis: new FormControl(miPelicula.sinopsis, [Validators.required]),
            imagen: new FormControl(miPelicula.imagen, [Validators.required]),
          }, []);
        }
      }
    })
  }
}
