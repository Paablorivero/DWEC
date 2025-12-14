import { Component, signal } from '@angular/core';
import { PersonaComponente } from "./Components/persona-componente/persona-componente";

@Component({
  selector: 'app-root',
  imports: [PersonaComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PruebaAngular');
}
