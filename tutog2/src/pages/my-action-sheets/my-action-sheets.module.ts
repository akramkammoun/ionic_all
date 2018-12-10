import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyActionSheetsPage } from './my-action-sheets';

@NgModule({
  declarations: [
    MyActionSheetsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyActionSheetsPage),
  ],
})
export class MyActionSheetsPageModule {}
