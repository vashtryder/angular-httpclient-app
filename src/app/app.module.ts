import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

import { RestApiService } from './rest-api.service';
import { registerLocaleData } from '@angular/common';
import localeES from "@angular/common/locales/es";

registerLocaleData(localeES, "es-PE");

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuarioListComponent,
    UsuarioDetalleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
