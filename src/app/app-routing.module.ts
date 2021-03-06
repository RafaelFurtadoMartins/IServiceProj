import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'add-service',
    loadChildren: () => import('./add-service/add-service.module').then( m => m.AddServicePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-service/:id',
    loadChildren: () => import('./add-service/add-service.module').then( m => m.AddServicePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'edit-service',
    loadChildren: () => import('./edit-service/edit-service.module').then( m => m.EditServicePageModule),
    canActivate: [AuthGuard]

  },








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
