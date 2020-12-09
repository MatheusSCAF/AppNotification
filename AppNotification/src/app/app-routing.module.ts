import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AngularFireAuthGuard,canActivate,redirectLoggedInTo,redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { AngularFireAuth } from '@angular/fire/auth';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['folder'])
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    // canActivate: [AngularFireAuthGuard],
    // data: {AuthGuardPipe : redirectUnauthorizedTo}

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
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
