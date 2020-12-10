import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercAnoPageRoutingModule } from './terc-ano-routing.module';

import { TercAnoPage } from './terc-ano.page';
import {NgCalendarModule} from 'ionic2-calendar'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercAnoPageRoutingModule,
    NgCalendarModule

  ],
  declarations: [TercAnoPage]
})
export class TercAnoPageModule {}
