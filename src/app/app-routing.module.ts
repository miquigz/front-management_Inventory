import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JwtGuard } from './guards/jwt.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'management',
    canLoad: [JwtGuard],
    loadChildren: ()=> import('./management/management.module').then(m => m.ManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
