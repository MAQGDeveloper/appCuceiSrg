import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { StatusBar } from '@ionic-native/status-bar';
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  slides: any[] = [
    {
      title: "¡Bienvenido a CUCEI-SRG!",
      description: "Una Nueva Forma de realizar Reportes de Mantenimiento y Seguridad en CUCEI",
      image: "../../assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "¿Qué es CUCEI-SRG?",
      description: "CUCEI-SRG Es una app donde la comunidad CUCEI podrá realizar reportes de mantenimiento y seguridad desde tu SmartPhone de una manera ágil y sencilla.",
      image: "../../assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "¿Qué necesito para utilizar la App?",
      description: "Para Ingresar solo necesitas tu correo institucional UDG <small>*Para Alumnos, Académicos y Administrativos.</small>",
      image: "../../assets/imgs/ica-slidebox-img-3.png",
    },
    {
      title: "¿Una Emergencia?",
      description: "Tan Solo toca la opción EMERGENCIA y podrás comunicarte directamente al área de Seguridad donde te atenderán de manera inmediata.",
      image: "../../assets/imgs/ica-slidebox-img-4.png",
    }
  ];

  constructor(public navCtrl: NavController,
              private statusBar: StatusBar,) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#000000');
  }
  saltar_tutorial(){
    this.navCtrl.setRoot(LoginPage);
  }
}
