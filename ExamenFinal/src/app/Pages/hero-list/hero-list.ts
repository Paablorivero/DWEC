import { Component, inject } from '@angular/core';
import { IHero } from '../../Interfaces/ihero';
import { HeroService } from '../../Services/hero-service';
import Swal from 'sweetalert2';
import { HeroCard } from "../../Components/hero-card/hero-card";

@Component({
  selector: 'app-hero-list',
  imports: [HeroCard],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {
  heroesArray!: IHero[];
  heroesService = inject(HeroService);

  ngOnInit(){
    this.cargarHeroes();
    console.log("NgOnInit ejecutandose");
  }

  async cargarHeroes(): Promise<void>{
    try{
      const response = await this.heroesService.getAllHeroes();
      this.heroesArray = response.characters;
    }catch (error){
      console.error('Error al obtener los heroes:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar los heroes',
      });
    }
  }
}
