import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {
  
  id = this.actRoute.snapshot.params['id'];
  usuarioData: any = {};
  
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.restApi.setUsuario(this.id).subscribe((data: {}) => {
      this.usuarioData = data;
    })
  }

  editUsuario(){
    return this.restApi.updateUsuario(this.id, this.usuarioData).subscribe(
      (data: {}) => {
        this.usuarioData = data;
      })
  }

  alertUpdate(){
    if(window.confirm('Estas Seguro, Que quieres actualizar?')){
      this.restApi.updateUsuario(this.id, this.usuarioData).subscribe(data => {
        this.router.navigate(['/usuario-list'])
      })
    }
  }
}
