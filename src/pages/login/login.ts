import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { MenuprincipalPage } from "../menuprincipal/menuprincipal";
import { HelpemailPage } from "../helpemail/helpemail";
import swal from 'sweetalert';
import { CallNumber } from '@ionic-native/call-number';
import { StatusBar } from '@ionic-native/status-bar';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private afAuth:AngularFireAuth,
              private callNumber: CallNumber,
              private statusBar: StatusBar,
              private toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              private modalCtrl: ModalController) {
                this.statusBar.overlaysWebView(false);
                this.statusBar.backgroundColorByHexString('#163247');
  }
  // ionViewPageLoad(){
  //   this.afAuth.auth.onAuthStateChanged(function(user) {
  //     if (user) {
  //       this.navCtrl.setRoot(MenuprincipalPage,{
  //         'correo': user.email,
  //         'imagen': user.photoURL
  //       }); //to the page where user navigates after login
  //       // User is signed in.
  //     } else {
  //       this.navCtrl.setRoot(LoginPage); // to the login page as user is not logged in
  //       // No user is signed in.
  //     }
  //   });
  // }
   async disableBtn(action:boolean){
     let button = <HTMLInputElement> document.getElementById("btnLogin");
     button.disabled = action;
  }
  async SigninUser(user:User){
    try{
      this.disableBtn(true);
      await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password).then(user=>{
        this.disableBtn(true);
        this.navCtrl.setRoot(MenuprincipalPage,{
          'correo':user.user.email,
          'imagen':user.user.photoURL,
      })
    });
    }catch(error){
        let toast = this.toastCtrl.create({
          message: 'Datos inválidos o campos vacios',
          duration: 3000,
          position: 'bottom'
        });
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        toast.present();
        this.disableBtn(false);
      }
    
}
  SignupUser(){
    this.navCtrl.push('FormnewuserPage');
  }
  
  HelpEmail(){
    // let modal = this.modalCtrl.create(HelpemailPage);
    // modal.present();
    this.navCtrl.push('HelpemailPage');
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
