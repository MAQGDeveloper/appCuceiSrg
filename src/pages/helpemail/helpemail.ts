import { Component } from '@angular/core';
import { IonicPage,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
@IonicPage()
@Component({
  selector: 'page-helpemail',
  templateUrl: 'helpemail.html',
})
export class HelpemailPage {

  constructor(public viewCtrl: ViewController,
              private statusBar: StatusBar) {
                this.statusBar.overlaysWebView(false);
  }
   close(){
    this.viewCtrl.dismiss();
  }
}
