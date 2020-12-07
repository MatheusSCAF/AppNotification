import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimAnoPageRoutingModule } from './prim-ano-routing.module';

import { PrimAnoPage } from './prim-ano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimAnoPageRoutingModule
  ],
  declarations: [PrimAnoPage]
})
export class PrimAnoPageModule {}
