import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../home/home';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
  
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }
}
