import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ServicioUsuario } from '../../Services/servicio-usuario';
import { Iusuario } from '../../Interfaces/iusuario';

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
  
}
