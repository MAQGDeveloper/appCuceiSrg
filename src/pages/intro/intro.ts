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
      description: "Una Nueva Forma de Consultar tus Reportes de Mantenimiento y Seguridad en CUCEI",
      image: "../../assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "¿Qué es CUCEI-SRG?",
      description: "CUCEI-SRG Es Una App donde la Comunidad CUCEI podrá Ver sus Reportes de Mantenimiento y Seguridad desde tu SmartPhone de una Manera Ágil y Sencilla.",
      image: "../../assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "¿Qué necesito para utilizar la App?",
      description: "Para Ingresar solo necesitas tu Correo Institucional UDG <small>*Para Alumnos, Académicos y Administrativos.</small>",
      image: "../../assets/imgs/ica-slidebox-img-3.png",
    },
    {
      title: "¿Una Emergencia?",
      description: "Tan solo toca la opción EMERGENCIA y podrás Comunicarte directamente al Área de Seguridad donde te Atenderán de manera inmediata.",
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
