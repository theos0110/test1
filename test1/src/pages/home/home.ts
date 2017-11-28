import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { SettingPage } from '../setting/setting';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabsRoot = TabsPage;
  searchRoot = SearchPage;
  settingRoot = SettingPage;

  constructor(public navCtrl: NavController) {

    
  }

  goToSearch() {
    this.navCtrl.push(SearchPage);
  }

}

