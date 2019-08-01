import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'usuario-create' },
  { path: 'usuario-create', component: UsuarioCreateComponent },
  { path: 'usuario-list', component: UsuarioListComponent },
  { path: 'usuario-update/:id', component: UsuarioUpdateComponent } ,
  { path: 'usuario-detalle/:id', component: UsuarioDetalleComponent }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
