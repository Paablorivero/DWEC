import { Component, inject, Input } from '@angular/core';
import { IHero } from '../../Interfaces/ihero';
import { HeroService } from '../../Services/hero-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero-card',
  imports: [],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {

  heroService = inject(HeroService);
  router = inject(Router);
  @Input() miHeroe!: IHero;
  
  verMas(hero: IHero) {
    this.router.navigate(['/hero', hero.id]);
  }

  editar(hero: IHero) {
  this.router.navigate(['/updatehero', hero.id]);
  }

  eliminar(hero: IHero) {
    Swal.fire({
      title: '¿Eliminar usuario ' + hero.fullname + '?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
    if (result.isConfirmed) {
      this.heroService.deleteHero(hero.id);
      Swal.fire(
        'Eliminado',
        'El usuario ha sido eliminado correctamente',
        'success'
      );
    }
    });
  }

  
  
}
