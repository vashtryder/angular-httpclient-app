import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  Usuario: any = {};

  constructor(
    public restApi:RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.setUsuario(this.id).subscribe((data: {}) => {
      this.Usuario = data;
    })
  }

}
