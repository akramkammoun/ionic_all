import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-my-action-sheets',
  templateUrl: 'my-action-sheets.html',
})
export class MyActionSheetsPage {


  // public event = {
  //   month: '1990-02-19',
  //   timeStarts: '07:43',
  //   timeEnds: '1990-02-20'
  // }

  selectedTime = '07:43';

  tap = 0;

  att = 5;

  myIcon = 'heart';

  toggleValue = false;

  form =  {
    title: '',
    description: ''
  };

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {

  }

  logForm() {
    console.log(this.form);
    this.toggleValue = !this.toggleValue;
  }

  tapEvent(e) {
    this.tap++;
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive', role: 'destructive',
          handler: () => { console.log('Destructive clicked'); }
        },
        {
          text: 'Cancel', role: 'cancel',
          handler: () => { console.log('Cancel clicked'); }
        }
      ]
    });
    actionSheet.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album",
      inputs: [{ name: 'title', placeholder: 'Title' }],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            console.log(data);
            this.att = data.title;
          }
        }
      ]
    });
    prompt.present();
  }

}
