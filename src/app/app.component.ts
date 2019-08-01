import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario-create/usuario-create.model';
import { RestApiService } from './rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mi Proyecto angular';
  Usuario: any = [];
  
  constructor(private restApi: RestApiService){}

  ngOnInit()  {
    this.CargarUsuario()
  }
  
  CargarUsuario() {
    return this.restApi.getUsuario().subscribe((data: {}) => {
      this.Usuario = data;
    })
  }

  objectKeys (objeto: any) {
   const keys = Object.keys(objeto);
   console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"
   return keys;
}

}
