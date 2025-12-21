import { Component, inject } from '@angular/core';
import { Iusuario } from '../../Interfaces/iusuario';
import { ServicioUsuario } from '../../Services/servicio-usuario';
import { CardUsuario } from "../../Components/card-usuario/card-usuario";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  imports: [CardUsuario],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  usuarioArray!: Iusuario[];
  UsersService = inject(ServicioUsuario);

  paginaActual!: number;
  totalPaginas!: number;
  totalUsuarios!: number;
  usuariosPorPagina!: number;

  async cargarUsuarios(pagina: number): Promise<void> {

    try {
      const response = await this.UsersService.getAllUsersPage(pagina);
      this.usuarioArray = response.results;
      this.paginaActual = response.page;
      this.totalPaginas = response.total_pages;
      this.totalUsuarios = response.total;
      this.usuariosPorPagina = response.per_page;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar los usuarios',
      });
    } 
  }

  async ngOnInit(): Promise<void>{
    await this.cargarUsuarios(1);
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.cargarUsuarios(this.paginaActual -1);
    }
  }

  paginaSiguiente(): void {
    if (this.paginaActual < this.totalPaginas) {
      this.cargarUsuarios(this.paginaActual + 1);
    }
  }

}
