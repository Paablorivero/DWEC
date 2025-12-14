import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioLibros } from '../../services/servicio-libros';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ILibro } from '../../interfaces/ilibro';

@Component({
  selector: 'app-libro-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './libro-form.html',
  styleUrl: './libro-form.css',
})
export class LibroForm {

  libroForm: FormGroup;
  ServicioLibro = inject(ServicioLibros);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  isNew: boolean;

  constructor(){
    this.isNew = true;

    this.libroForm = new FormGroup({
      id: new FormControl(null, []),
      titulo: new FormControl(null, [Validators.required]),
      autor: new FormControl(null, [Validators.required]),
      publicacion: new FormControl(null, [Validators.required]),
      genero: new FormControl(null, [Validators.required]),
      calificacion: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
      resumen: new FormControl(null, [Validators.required]),
      imagen: new FormControl(null, [Validators.required]),
    }, []);
  }

  getDataForm(){
    let libro = this.libroForm.value as ILibro;

    if(this.isNew){
      libro.id = -1;
      this.ServicioLibro.insertLibro(libro)
    }else{
      this.ServicioLibro.updateLibro(libro)
    }

    this.libroForm.reset();
    this.router.navigate(['libros']);
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe((params: any) =>{  
    let id: number = +params.id;
    if(id != undefined){
      let miLibro = this.ServicioLibro.getLibroById(id);
      if (miLibro != undefined){
        this.isNew = false;
        this.libroForm = new FormGroup({
          id: new FormControl(miLibro.id, []),
          titulo: new FormControl(miLibro.titulo, [Validators.required]),
          autor: new FormControl(miLibro.autor, [Validators.required]),
          publicacion: new FormControl(miLibro.publicacion, [Validators.required]),
          genero: new FormControl(miLibro.genero, [Validators.required]),
          calificacion: new FormControl(miLibro.calificacion, [Validators.required, Validators.min(0), Validators.max(10)]),
          resumen: new FormControl(miLibro.resumen, [Validators.required]),
          imagen: new FormControl(miLibro.imagen, [Validators.required]),
        }, []);
      }
    }
  })
  }
}
