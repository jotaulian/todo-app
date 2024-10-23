import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AuthGuard } from './guards/auth.guard';


const routes:Routes = [
  // localhost:400/auth/
  {
    path:'',
    component:LayoutPageComponent,
    children: [
      {
        path:'login',
        component: LoginPageComponent,
      },
      {
        path:'account',
        component: AccountPageComponent,
        canActivate: [AuthGuard],
        canMatch: [AuthGuard]
      },
      {path:'**', redirectTo: 'login'},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
