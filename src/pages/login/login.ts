import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuprincipalPage } from "../menuprincipal/menuprincipal";
import firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';
import swal from 'sweetalert';
import { CallNumber } from '@ionic-native/call-number';
import { StatusBar } from '@ionic-native/status-bar';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public googlePlus: GooglePlus,
              private callNumber: CallNumber,
              private statusBar: StatusBar,
              private toastCtrl: ToastController) {
                this.statusBar.overlaysWebView(true);
                this.statusBar.backgroundColorByHexString('#163247');
  }
 
  signInGoogleMobile(){
    this.googlePlus.login({
      'webClientId':'56958534713-dr5enm501l2p1pkv6qrhmjjs8m3mb6ai.apps.googleusercontent.com',
      'offline':true
    }).then(res=> {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then(user=> {
          let email = user.email;
          let name = user.displayName;
          let picture = user.photoURL;
          this.valida(email,name,picture);
        }).catch(error=>{
          let toast = this.toastCtrl.create({
            message: 'Ha Ocurrido Un Problema Al Iniciar Sesión.',
            duration: 3000,
            position: 'bottom'
          });
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
          toast.present();
        })
    });
}

 valida(email:string,name:string,picture:string){
    //Si en el array email contiene el dominio
    //Dominio alumnos.udg.mx

    if(email.indexOf('@alumnos.udg.mx')!=-1)
    {
      let toast = this.toastCtrl.create({
        message: 'Bienvenido '+ name +' a CUCEI-SRG',
        position: 'bottom',
        showCloseButton:true,
        closeButtonText:'Ok'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
      this.navCtrl.setRoot(MenuprincipalPage,{
        'nombre':name,
        'correo':email,
        'imagen':picture
      });
    }
    //Dominio academicos.udg.mx
    else if(email.indexOf('@academicos.udg.mx')!=-1)
      {
         this.navCtrl.setRoot(MenuprincipalPage);
      }
      else if(email.indexOf('@cucei.udg.mx')!=-1)
        {
          this.navCtrl.setRoot(MenuprincipalPage);
        }
      //si no es ninguno
      else
      {
          swal({
          title: "Oops!... Ha Ocurrido un Error.",
          text: "Has intentado ingresar con el correo: "+ email+", el cual no pertenece a un correo Institucional UDG.",
          icon: "error",
        });
      }
  }
  authSys(){
    let toast = this.toastCtrl.create({
      message: '¡Opción Disponible Próximamente!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  HelpEmail(){
    let toast = this.toastCtrl.create({
      message: '¡Opción Disponible Próximamente!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  AlumnFirst(){
    let toast = this.toastCtrl.create({
      message: '¡Opción Disponible Próximamente!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  emergency(){
    this.callNumber.callNumber("3313668535", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
  AdPrivacy(){
    swal({
    title: "Aviso de Privacidad",
    text: "En Construcción",
    icon: "info",
  });
  }
}
