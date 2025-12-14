import { Component, EventEmitter, Input, Output } from '@angular/core';
import { noticiaInterfaz } from '../../interfaces/noticiaInterfaz';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-componente',
  imports: [FormsModule],
  templateUrl: './blog-componente.html',
  styleUrl: './blog-componente.css',
})
export class BlogComponente {
  //Creamos un array para almacenar las noticias.
  noticiasBlog: noticiaInterfaz [];

  //Declaramos el array en el constructor y añadimos una noticia de ejemplo
  constructor(){
    this.noticiasBlog = [
      {
        nombre: 'Se cae un avion en mitad del pacifico',
        imagen: 'https://cnnespanol.cnn.com/wp-content/uploads/2019/01/190111135100-01-flight-1549-full-169.jpg?quality=100&strip=info',
        noticia: 'El avion tuvo un fallo electronico a mitad de vuelo y los pasajeros tuvieron que ser rescatados por las autoridades costeras de Australia',
        fecha: '2025-11-08'
      }
    ];
  }

  //Añadimos un objeto de noticia para enlazar con el formulario
  nuevaNoticia: noticiaInterfaz={
    nombre: '',
    imagen:'',
    noticia:'',
    fecha:''
  };
  
  addNoticia(){
    //Antes de añadir la noticia comprobamos que se han rellenado los campos 
    //Mandamos una alerta para indicar que hay que completar los campos
    if(this.nuevaNoticia.nombre === '' || this.nuevaNoticia.imagen === '' || 
      this.nuevaNoticia.noticia === '' || this.nuevaNoticia.fecha === ''){
        alert('Para publicar una noticia tienes que rellenar todos los campos');
      } 
    
    //Una vez comprobado que los campos se han rellenado se añade la noticia al array
    else{
        this.noticiasBlog.unshift(this.nuevaNoticia); //Añadimos la noticia creada al principio del array para mostrarla la primera
        
        this.nuevaNoticia={//Limpiamos los campos del objeto creado
          nombre: '',
          imagen:'',
          noticia:'',
          fecha:''
        };
      };
  }
}
