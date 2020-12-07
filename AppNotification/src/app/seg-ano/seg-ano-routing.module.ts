import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegAnoPage } from './seg-ano.page';

const routes: Routes = [
  {
    path: '',
    component: SegAnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegAnoPageRoutingModule {}
