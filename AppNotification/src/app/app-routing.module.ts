import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'prim-ano',
    loadChildren: () => import('./prim-ano/prim-ano.module').then( m => m.PrimAnoPageModule)
  },
  {
    path: 'seg-ano',
    loadChildren: () => import('./seg-ano/seg-ano.module').then( m => m.SegAnoPageModule)
  },
  {
    path: 'terc-ano',
    loadChildren: () => import('./terc-ano/terc-ano.module').then( m => m.TercAnoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
