import { MyActionSheetsPageModule } from './../pages/my-action-sheets/my-action-sheets.module';
import { HelloIonicPage } from './../pages/hello-ionic/hello-ionic-page';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HiIonicPage } from '../pages/hi-ionic/hi-ionic';
import { MyActionSheetsPage } from '../pages/my-action-sheets/my-action-sheets';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelloIonicPage,
    HiIonicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MyActionSheetsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelloIonicPage,
    HiIonicPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
