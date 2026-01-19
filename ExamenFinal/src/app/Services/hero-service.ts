import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IHero } from '../Interfaces/ihero';
import { last, lastValueFrom } from 'rxjs';
import { IApi } from '../Interfaces/iapi';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private baseUrl: string = 'http://localhost:8080/api/characters';
  httpClient = inject(HttpClient);

  constructor(){}

  async getAllHeroes(): Promise<IApi>{
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl));
  }

  getHeroById(id: number): Promise<IHero>{
    return lastValueFrom(this.httpClient.get<IHero>(this.baseUrl + '/' + id));
  }
  
  deleteHero(id: number): Promise<IHero>{
    return lastValueFrom(this.httpClient.delete<IHero>(`${this.baseUrl}/${id}`));
  }

  insertHero(hero: IHero): Promise<IHero>{
    return lastValueFrom(this.httpClient.post<IHero>(this.baseUrl, hero));
  }

  updateHero(hero: IHero): Promise<IHero>{
    return lastValueFrom(this.httpClient.put<IHero>(`${this.baseUrl}/${hero.id}`, hero))
  }
}
