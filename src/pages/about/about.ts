import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public viewCtrl: ViewController ) {
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
