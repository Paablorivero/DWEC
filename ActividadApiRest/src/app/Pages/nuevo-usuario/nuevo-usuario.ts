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
        this.userForm.reset();
        this.router.navigate(['home'])
      }
    }else { 
      const respone = await this.userService.updateUser(usuario);
      
      if(respone.id) {
        Swal.fire({
          title: "¿Estas seguro de editar los datos?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Guardar",
          denyButtonText: `No Guardar`
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Guardado con exito!", "", "success");
          } else if (result.isDenied) {
            Swal.fire("No se guardaron los cambios", "", "info");
          }
          this.userForm.reset();
          this.router.navigate(['home'])
        });
      }
    }
  }
  
  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) => {
      let _id: string = params._id;
      
      if(_id != undefined){
        let miUsuario = await this.userService.getUserById(_id);
        
        if(miUsuario != undefined){
          this.isNew = false;
          this.userForm = new FormGroup({
            _id: new FormControl(miUsuario._id,[]),
            id: new FormControl(miUsuario.id,[]),
            first_name: new FormControl(miUsuario.first_name,[Validators.required, Validators.minLength(3)]),
            last_name: new FormControl(miUsuario.last_name, [Validators.required]),
            username: new FormControl(miUsuario.username,[Validators.required]),
            email: new FormControl(miUsuario.email, [Validators.required]),
            image: new FormControl(miUsuario.image, [Validators.required]),
            password: new FormControl(miUsuario.password, [Validators.required, Validators.minLength(3)])
          }, []);
        }else {
          alert("no se ha podido encontrar el usuario")
        }
      }
    });
  }
}
