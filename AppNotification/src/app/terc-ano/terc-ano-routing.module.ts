import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TercAnoPage } from './terc-ano.page';

const routes: Routes = [
  {
    path: '',
    component: TercAnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TercAnoPageRoutingModule {}
