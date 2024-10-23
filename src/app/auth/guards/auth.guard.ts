import { Injectable } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { SupabaseService } from '../../supabase.service';

@Injectable({providedIn: 'root'})
export class AuthGuard {
  session = this.supabase.session

  constructor(private readonly supabase: SupabaseService, private router: Router) {}

  private checkAuthStatus(): boolean | Observable<boolean>{

     if(!this.session){
      console.log('AuthGuard: No hay session, redirigiendo a login...');
      console.log('AuthGuard - session: ',this.session);

      this.router.navigate(['/auth/login'])
     }
     return true;
  }

  public canMatch: CanMatchFn = (route, segments) => {
    return this.checkAuthStatus();
  };

  public canActivate: CanActivateFn = (route, state) => {
    return this.checkAuthStatus();
  };
}
