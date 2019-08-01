import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario-create/usuario-create.model';
import { RestApiService } from "../rest-api.service";

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  Usuario: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadUsuarios()
  }
  
  loadUsuarios() {
    return this.restApi.getUsuario().subscribe((data: {}) => {
      this.Usuario = data;
    })
  }

}
