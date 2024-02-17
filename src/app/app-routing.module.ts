import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./app/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./app/register/register.module').then(m => m.RegisterModule) },
  { path: 'forgot-password', loadChildren: () => import('./app/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: '', loadChildren: () => import('./app/layout/layout.module').then(m => m.LayoutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
