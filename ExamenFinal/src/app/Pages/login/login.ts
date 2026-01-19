import { Component, inject } from '@angular/core';
import { LoginService } from '../../Services/login-service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUsuario } from '../../Interfaces/iusuario';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private loginService = inject(LoginService);
  private router = inject(Router);

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/heroes']);
    }
  }

  async getUser(loginForm: NgForm){
    const loginUser: IUsuario = loginForm.value as IUsuario;
    
    try{
      let response = await this.loginService.login(loginUser);
      console.log(response);

      if(response.token){
        localStorage.setItem("token", response.token);
        
        this.router.navigate(['/dashboard/heroes']);
        loginForm.reset
      }
    }catch(error){
      Swal.fire({
        theme: 'auto',
        title: "Datos incorrectos",
        icon: "error",
        draggable: true
      });

      loginForm.reset();
    }
  }
}
