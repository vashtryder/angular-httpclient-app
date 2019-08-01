import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';

import { UsuarioData } from './usuario-detalle/usuario-detalle.model';
import { Usuario } from './usuario-create/usuario-create.model';


@Injectable({
  providedIn: 'root'
})

 

export class RestApiService {
    apiURL = "https://reqres.in/api/users?page=1";
    apiURLEdit = 'https://reqres.in/api/users/';
    apiURLCreate = 'https://reqres.in/api/users';
    constructor(private http: HttpClient) { }

    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUsuario(): Observable<UsuarioData> {
    return this.http.get<UsuarioData>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

 // HttpClient API get() method => Fetch employee
  setUsuario(id): Observable<UsuarioData> {
    return this.http.get<UsuarioData>(this.apiURLEdit + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  crearUsuario(DataUsuario): Observable<UsuarioData> {
    console.log(this.apiURLCreate);
    return this.http.post<UsuarioData>(this.apiURLCreate, JSON.stringify(DataUsuario), this.httpOptions)
    .pipe(
      retry(1),
      tap((DataUsuario) => console.log(`Añadido Usuario w/ id=${DataUsuario.id}`)),
      catchError(this.handleError)
    )
  }  

  updateUsuario (id, DataUsuario): Observable<UsuarioData> {
    return this.http.put<UsuarioData>(this.apiURLEdit + id, JSON.stringify(DataUsuario), this.httpOptions)
    .pipe(
      retry(1),
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError)
    );
  }

    // Error handling 
    handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}