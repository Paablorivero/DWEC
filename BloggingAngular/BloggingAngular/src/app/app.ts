import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponente } from './Componentes/blog-componente/blog-componente';
import { HeaderComponente } from './Componentes/header-componente/header-componente';
import { FooterComponente } from './Componentes/footer-componente/footer-componente';

@Component({
  selector: 'app-root',
  imports: [BlogComponente, HeaderComponente, FooterComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BloggingAngular');
}
