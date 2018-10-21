import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ModalController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from "../login/login";
import { CallNumber } from '@ionic-native/call-number';
import { AngularFireAuth } from 'angularfire2/auth';
import { AboutPage } from '../about/about';
@IonicPage()
@Component({
  selector: 'page-menuprincipal',
  templateUrl: 'menuprincipal.html',
})
export class MenuprincipalPage { 
  nombre: string;
  email: string;
  imagen: string;
  uuid: string;
  mostrar:boolean;
  dominio = "@alumnos.udg.mx";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController,
              private statusBar: StatusBar,
              private afAuth: AngularFireAuth,
              private callNumber: CallNumber,
              private modalCtrl: ModalController) {
    
    //Testing
    // this.nombre = "Miguel Angel Quezada Galvan";
    // this.email = "miguel.quezada@academicos.udg.mx";
    // this.imagen = "../../assets/imgs/kiwi.jpg";
    // this.statusBar.overlaysWebView(false);
    // this.validate();
    this.statusBar.backgroundColorByHexString('#0D47A1');
    //Produccion
    this.nombre = this.navParams.get("nombre");
    this.email = this.navParams.get("correo");
    this.imagen = this.navParams.get("imagen");
    this.uuid = this.navParams.get("uuid");
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
  logout(){
    this.afAuth.auth.signOut().then(result =>{
      this.nombre = null;
      this.email= null;
      this.imagen = null;
      this.uuid= null;
      const loader = this.loadingCtrl.create({
        content: "Cerrando Sesión...",
        duration: 3000
      });
      loader.present();
      this.navCtrl.setRoot(LoginPage);
    }).catch(function(error){
        alert("Ha ocurrido un error al cerrar sesión");
    });
  //   firebase.auth().signOut().then(function(){
  //     this.nombre = null;
  //     this.email= null;
  //     this.imagen = null;
  //     this.uuid= null;
  //     this.navCtrl.setRoot(LoginPage);
  //   }).catch(function(error){
  //     alert("Ha ocurrido un error al cerrar sesión");
  //   });
  }
  emergency(){
    this.callNumber.callNumber("3313668535", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  about(){
    let modal = this.modalCtrl.create(AboutPage);
    modal.present();
  }
}

  
