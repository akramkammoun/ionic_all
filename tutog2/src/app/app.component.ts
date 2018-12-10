import { MyActionSheetsPage } from './../pages/my-action-sheets/my-action-sheets';
import { HiIonicPage } from './../pages/hi-ionic/hi-ionic';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic-page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HiIonicPage;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{ titre: string, composant: any }>;

  constructor(platform: Platform,
    statusBar: StatusBar,
    private menu: MenuController,
    splashScreen: SplashScreen) {


    this.pages = [
      { titre: "Hi", composant: HiIonicPage },
      { titre: "Hello", composant: HelloIonicPage },
      { titre: "Action sheets", composant: MyActionSheetsPage }
    ];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // goPageHi() {
  //   this.nav.setRoot(HiIonicPage);
  //   this.menu.close();
  // }

  // goPageHello() {
  //   this.nav.setRoot(HelloIonicPage);
  //   this.menu.close();
  // }

  goPage(page: any) {
    this.nav.push(page.composant);
    this.menu.close();
  }
}

