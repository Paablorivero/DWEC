import { Component, inject } from '@angular/core';
import { Iusuario } from '../../Interfaces/iusuario';
import { ServicioUsuario } from '../../Services/servicio-usuario';
import { CardUsuario } from "../../Components/card-usuario/card-usuario";

@Component({
  selector: 'app-home',
  imports: [CardUsuario],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  usuarioArray: Iusuario[];
  UsersService = inject(ServicioUsuario);

  constructor(){
    this.usuarioArray = [];
  }

  ngOnInit(): void{

    this.UsersService.getAllUsers().subscribe((data: any) => {
      this.usuarioArray = data.results;
      console.log(this.usuarioArray)
    }
    );
  }
}
