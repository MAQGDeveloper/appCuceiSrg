import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from "../pages/intro/intro";
import { LoginwebPage } from "../pages/loginweb/loginweb";
import { MenuprincipalPage } from "../pages/menuprincipal/menuprincipal";
import { FormreportemovilPage } from "../pages/formreportemovil/formreportemovil";
import { HelpemailPage } from "../pages/helpemail/helpemail";
import { AboutPage } from "../pages/about/about";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = LoginPage;
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if (platform.is('cordova')) {
        this.rootPage = IntroPage;
      } else {
        //this.rootPage = FormreportemovilPage;
        //this.rootPage = IntroPage;
        //this.rootPage = MenuprincipalPage;
        this.rootPage = AboutPage;
        //this.rootPage = HelpemailPage;
        //this.rootPage = LoginwebPage;
      }
    });
  }
}
