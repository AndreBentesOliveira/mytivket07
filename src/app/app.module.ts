import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { MenuPage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RecargaPage } from '../pages/recarga/recarga';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    RecargaPage,
    RegisterPage,
    LoginPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    RecargaPage,
    RegisterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
