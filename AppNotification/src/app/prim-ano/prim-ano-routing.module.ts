import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimAnoPage } from './prim-ano.page';

const routes: Routes = [
  {
    path: '',
    component: PrimAnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimAnoPageRoutingModule {}
