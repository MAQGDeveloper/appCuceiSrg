import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from "../../config/url.servicios";
import 'rxjs/add/operator/map';
/*
  Generated class for the AlumnoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlumnoProvider {
  
  reportes:number;

  constructor(public http: Http) {
    this.cargar_reporteSeguridad();
  }
  
  cargar_reporteSeguridad(){
    let url = URL_SERVICIOS + "/usuario/reportes/miguel.quezada@alumnos.udg.mx";
    this.http.get(url)
              .map(resp => resp.json())
              .subscribe(data => {
                console.log(data);
                if(data.error){
                  
                }else{
                  this.reportes = data;
                }
              })
  }

}
