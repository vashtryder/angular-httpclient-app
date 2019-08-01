import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';
import {formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import {NgbDateParserFormatter, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { MomentDateFormatter } from './dateFormat';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css'],
  providers: [
    {provide: NgbDateParserFormatter, useClass: MomentDateFormatter}
   ]
})
export class UsuarioCreateComponent implements OnInit {
   
  // model: NgbDateStruct;
  // date: {year: number, month: number};

  //  @Input() UsuarioDetalle = {
  //    id: 5,
  //    nombre: '',
  //    apellidomat:'',
  //    apellidopat:'',
  //    email:'',
  //    fchnac:'',
  //    fchingreso: formatDate(new Date(), 'dd/mm/yyyy','es-PE','-0530'),
  //    createAt: formatDate(new Date(), 'dd-mm-yyyyTHH:mm:ss','es-PE','-0530'), 
  //  } 
  @Input() usuarioData = {
    id: 4,
    first_name:'',
    last_name:'',
    avatar: '',
  }

  constructor(
    public restApi: RestApiService,
    public router:Router,
    private calendar: NgbCalendar
  ) { }

  ngOnInit() {
    console.log(this.usuarioData);
  }

  nuevoUsuario(){
    this.restApi.crearUsuario(this.usuarioData).subscribe(
      (data:{}) => {
         this.router.navigate(['/usuario-list'])
      })
  }
}
