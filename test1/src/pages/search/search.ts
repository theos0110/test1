import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { StudentPage } from '../student/student';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  constructor(public navCtrl: NavController) {
    
    }

  goToStudent():void {
      this.navCtrl.push(StudentPage);
  }

}
