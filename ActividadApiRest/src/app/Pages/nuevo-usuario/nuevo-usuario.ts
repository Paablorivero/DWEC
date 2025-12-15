import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicioUsuario } from '../../Services/servicio-usuario';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Iusuario } from '../../Interfaces/iusuario';
import {v4 as uuidv4} from 'uuid';

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

  constructor(){
    this.userForm = new FormGroup({
      _id: new FormControl(null,[]),
      id: new FormControl(null,[]),
      first_name: new FormControl(null,[Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      username: new FormControl(null,[Validators.required]),
      email: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    }, []);
  }

  async getDataForm() {
    let usuario = this.userForm.value as Iusuario;

    usuario._id = uuidv4();

    const response = await this.userService.insertUser(usuario);
    if(response.id){
      alert('$(response.first_name) se ha añadido correctamente')
    }

    this.userForm.reset();
    this.router.navigate(['series'])
  }
}
