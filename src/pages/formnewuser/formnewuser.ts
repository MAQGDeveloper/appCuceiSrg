import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth';
@IonicPage()
@Component({
  selector: 'page-formnewuser',
  templateUrl: 'formnewuser.html',
})
export class FormnewuserPage {

  user ={} as User;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private toastCtrl: ToastController,
              private statusBar: StatusBar) {
                this.statusBar.overlaysWebView(false);
  }
  valida(user:User){
    //Si en el array email contiene el dominio
    //Dominio alumnos.udg.mx
    if (typeof(user.email) != "undefined" || typeof(user.password)!="undefined"){
      if(user.email.indexOf('@alumnos.udg.mx')!=-1)
    {
      this.SignupUser(user);
    }
    //Dominio academicos.udg.mx
    else if(user.email.indexOf('@academicos.udg.mx')!=-1)
      {
         this.SignupUser(user);
      }
      else if(user.email.indexOf('@cucei.udg.mx')!=-1)
        {
          this.SignupUser(user);
        }
        else if(user.email.length == 0)
        {
          this.toastCtrl.create({
            message: `Debe ingresar su email.`,
            duration:3000
          }).present();
        }
        else if(user.password.length == 0)
        {
          this.toastCtrl.create({
            message: `Debe ingresar su password.`,
            duration:3000
          }).present();
        }
      //si no es ninguno
      else
      {
        this.toastCtrl.create({
          message: `El correo: `+user.email+` no es válido.`,
          duration:3000
        }).present();
      }
    }else{
      this.toastCtrl.create({
        message: `Campos vacios.`,
        duration:3000
      }).present();
    }
    
      
  }
  async SignupUser(user:User){
    try{
      await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      this.toastCtrl.create({
        message: `El correo: `+user.email+` Ha sido registrado. Revisa tu bandeja de correo para activar tu cuenta.`,
        duration:5000
      }).present();
      this.navCtrl.pop();
    }catch(ex){
      this.toastCtrl.create({
        message: `Ha ocurrido un error: `+ ex,
        duration:3000
      }).present();
    }
  }

}
