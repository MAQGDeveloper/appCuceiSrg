import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-menuprincipal',
  templateUrl: 'menuprincipal.html',
})
export class MenuprincipalPage { 
  nombre: string;
  email: string;
  imagen: string;
  mostrar:boolean;
  dominio = "@alumnos.udg.mx";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController,
              private statusBar: StatusBar) {
    
    //Testing
    // this.nombre = "Miguel Angel Quezada Galvan";
    // this.email = "miguel.quezada@academicos.udg.mx";
    // this.imagen = "../../assets/imgs/kiwi.jpg";
    // this.statusBar.overlaysWebView(false);
    // this.validate();
    //Produccion
    this.nombre = this.navParams.get("nombre");
    this.email = this.navParams.get("correo");
    this.imagen = this.navParams.get("imagen");
    this.statusBar.overlaysWebView(false);
    this.validate();
  }
 
   presentLoading(type:string) {
    const loader = this.loadingCtrl.create({
      content: "Has ingresado como "+type,
      duration: 3000
    });
    loader.present();
  }
  
  validate(){
      if (this.email.indexOf(this.dominio) != -1) {
        this.presentLoading("Alumno");
        return this.mostrar = false;
      }else{
        this.presentLoading("Académico/Personal");
        return this.mostrar = true;
      }
  }
  
}

  
