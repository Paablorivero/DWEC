import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ServicioUsuario } from '../../Services/servicio-usuario';
import { Iusuario } from '../../Interfaces/iusuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-usuario',
  imports: [RouterLink],
  templateUrl: './info-usuario.html',
  styleUrl: './info-usuario.css',
})
export class InfoUsuario {

  userService = inject(ServicioUsuario);
  ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  miUsuario! : Iusuario;

  constructor(){
    this.miUsuario = {
      _id: '',
      id: 0,
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      image: '',
      password: ''
    };
  }

  ngOnInit(): void{
    this.ActivatedRoute.params.subscribe(async (params: any) => {
      let _id: string = params._id;
      if(_id != undefined){
        let user = await this.userService.getUserById(_id);
        if(user != undefined){
          this.miUsuario = {
            _id: user._id,
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email,
            image: user.image,
            password: user.password
          }
        }
      }
    })
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
      this.router.navigate(['home'])
      });
    }

    editar(usuario: Iusuario){
    this.router.navigate(['/updateuser', usuario._id]);
  }
}
