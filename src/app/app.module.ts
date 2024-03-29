import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';
import { Toast } from '@ionic-native/toast';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { IntroPage } from "../pages/intro/intro";
import { LoginPage } from "../pages/login/login";
import { MenuprincipalPage } from "../pages/menuprincipal/menuprincipal";
import { FormreportemovilPage } from "../pages/formreportemovil/formreportemovil";
import { AboutPage } from "../pages/about/about";
//Models

// import { UsuarioProvider } from '../providers/usuario/usuario';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import firebase from 'firebase';

//Plugins
import { GooglePlus } from '@ionic-native/google-plus';
//Providers
import { AlumnoProvider } from '../providers/alumno/alumno';
import { AcademicoProvider } from '../providers/academico/academico';

export const firebaseConfig = {
  apiKey: "AIzaSyA0DEHXIXxm83tCuyo1ywqWYQxDHC-GAzI",
  authDomain: "cucei-srg.firebaseapp.com",
  databaseURL: "https://cucei-srg.firebaseio.com",
  projectId: "cucei-srg",
  storageBucket: "cucei-srg.appspot.com",
  messagingSenderId: "56958534713"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    LoginPage,
    MenuprincipalPage,
    FormreportemovilPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    LoginPage,
    MenuprincipalPage,
    FormreportemovilPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
    CallNumber,
    StatusBar,
    Toast,
    AlumnoProvider,
    AcademicoProvider
  ]
})
export class AppModule {}
