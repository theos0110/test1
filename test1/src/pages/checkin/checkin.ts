import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html',
})
export class CheckinPage {

  /*constructor(public navCtrl: NavController, public navParams: NavParams) {
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinPage');
  }

  constructor(public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Complete',
      subTitle: 'บันทึกการมาเรียนเรียบร้อย',
      buttons: ['OK']
    });
    alert.present();
  }
}
