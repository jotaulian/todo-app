import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { PrimeNgModule } from '../primeNG/primeng.module';
import { AccountPageComponent } from './pages/account-page/account-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    LayoutPageComponent,
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    PrimeNgModule
  ]
})
export class AuthModule { }
