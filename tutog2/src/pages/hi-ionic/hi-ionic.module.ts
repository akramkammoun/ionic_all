import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HiIonicPage } from './hi-ionic';

@NgModule({
  declarations: [
    HiIonicPage,
  ],
  imports: [
    IonicPageModule.forChild(HiIonicPage),
  ],
})
export class HiIonicPageModule {}
