import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TiendaComponente } from "./Componentes/tienda-componente/tienda-componente";
import { NavbarComponente } from "./Componentes/navbar-componente/navbar-componente";
import { FooterComponente } from "./Componentes/footer-componente/footer-componente";

@Component({
  selector: 'app-root',
  imports: [TiendaComponente, NavbarComponente, FooterComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CarritoAGoodShop');
}
