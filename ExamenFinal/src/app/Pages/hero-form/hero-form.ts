import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroService } from '../../Services/hero-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IHero } from '../../Interfaces/ihero';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './hero-form.html',
  styleUrl: './hero-form.css',
})
export class HeroForm {

  heroForm: FormGroup;
  heroService = inject(HeroService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  isNew: boolean;

  constructor(){
    this.isNew = true;
    this.heroForm = new FormGroup({
      heroname: new FormControl(null, [Validators.required]),
      fullname: new FormControl(null, [Validators.required]),
      image1: new FormControl(null, [Validators.required]),
      image2: new FormControl(null, [Validators.required]),
      image3: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      race: new FormControl(null, [Validators.required]),
      alignment: new FormControl(null, [Validators.required]),
    }, []);
  }

  async getDataForm(){
    let heroe = this.heroForm.value as IHero
    if(this.isNew){
      const response = await this.heroService.insertHero(heroe);

      if(response.id){
        Swal.fire({
              title: 'Perfecto!',
              text: 'El usuario ' + heroe.fullname + ' se ha añadido correctamente',
              icon: 'success',
              confirmButtonText: 'Continuar'
          });
        this.heroForm.reset();
        this.router.navigate(['dashboard/heroes']);
      }
    }else{
      const response = await this.heroService.updateHero(heroe);

      if(response.id){
        Swal.fire({
          title: "¿Estas seguro de editar los datos?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Guardar",
          denyButtonText: `No Guardar`
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Guardado con exito!", "", "success");
          } else if (result.isDenied) {
            Swal.fire("No se guardaron los cambios", "", "info");
          }
          this.heroForm.reset();
          this.router.navigate(['home'])
        });
      }
    }
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async(params:any) => {
      let id: number = params.id;
      if(id != undefined){
        let miHero = await this.heroService.getHeroById(id);

        if(miHero != undefined){
          this.isNew = false;
          this.heroForm = new FormGroup({
            heroname: new FormControl(null, [Validators.required]),
            fullname: new FormControl(null, [Validators.required]),
            image1: new FormControl(null, [Validators.required]),
            image2: new FormControl(null, [Validators.required]),
            image3: new FormControl(null, [Validators.required]),
            gender: new FormControl(null, [Validators.required]),
            race: new FormControl(null, [Validators.required]),
            alignment: new FormControl(null, [Validators.required]),
          }, []);
        }else{
          alert("no se ha podido encontrar el heroe");
        }
      }
    })
  }
}
