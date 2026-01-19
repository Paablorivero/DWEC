import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { HeroService } from '../../Services/hero-service';
import { IHero } from '../../Interfaces/ihero';

@Component({
  selector: 'app-hero-info',
  imports: [],
  templateUrl: './hero-info.html',
  styleUrl: './hero-info.css',
})
export class HeroInfo {

  heroService = inject(HeroService);
  ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  miHeroe!: IHero;

  constructor(){
    this.miHeroe={
      id: 0,
      heroname: '',
      fullname: '',
      image1: '',
      image2:'',
      image3: '',
      gender: '',
      race: '',
      alignment: '',
      powerstats: {
        id: 0,
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat: 0,
      }
    };
  }

  ngOnInit(): void{
    this.ActivatedRoute.params.subscribe(async (params: any) =>{
      let id: number =
    })
  }
  
}
