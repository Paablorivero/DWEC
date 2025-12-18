import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioUsuario } from '../../Services/servicio-usuario';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Iusuario } from '../../Interfaces/iusuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './nuevo-usuario.html',
  styleUrl: './nuevo-usuario.css',
})
export class NuevoUsuario {

  userForm: FormGroup;
  userService = inject(ServicioUsuario);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  isNew: boolean;

  constructor(){
    this.isNew = true;
    this.userForm = new FormGroup({
      _id: new FormControl(null,[]),
      id: new FormControl(null,[]),
      first_name: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      last_name: new FormControl(null, [Validators.required]),
      username: new FormControl(null,[Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      image: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    }, []);
  }

  async getDataForm() {
    let usuario = this.userForm.value as Iusuario;
    if (this.isNew){

    const response = await this.userService.insertUser(usuario);
    if(response.id){
      Swal.fire({
            title: 'Perfecto!',
            text: 'El usuario ' + usuario.username + ' se ha añadido correctamente',
            icon: 'success',
            confirmButtonText: 'Continuar'
        })
    }
  }
    console.log(usuario)
    this.userForm.reset();
    this.router.navigate(['home'])
  }
}
