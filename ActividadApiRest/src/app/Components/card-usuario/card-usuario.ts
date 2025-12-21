import { Component, inject, Input } from '@angular/core';
import { ServicioUsuario } from '../../Services/servicio-usuario';
import { Router } from '@angular/router';
import { Iusuario } from '../../Interfaces/iusuario';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-card-usuario',
  imports: [],
  templateUrl: './card-usuario.html',
  styleUrl: './card-usuario.css',
})
export class CardUsuario {

  userService = inject(ServicioUsuario);
  router = inject(Router);
  @Input() miUsuario!: Iusuario;

  verMas(usuario : Iusuario){
    this.router.navigate(['/user', usuario._id]);
  }

  eliminar(usuario: Iusuario){
    Swal.fire({
      title: '¿Eliminar usuario ' + usuario.first_name + '?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
    if (result.isConfirmed) {
      this.userService.deleteById(usuario._id);
      Swal.fire(
        'Eliminado',
        'El usuario ha sido eliminado correctamente',
        'success'
      );
    }
    });
  }

  editar(usuario: Iusuario){
    this.router.navigate(['/updateuser', usuario._id]);
  }
}
