import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegAnoPageRoutingModule } from './seg-ano-routing.module';

import { SegAnoPage } from './seg-ano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegAnoPageRoutingModule
  ],
  declarations: [SegAnoPage]
})
export class SegAnoPageModule {}
