import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

// publicGuards - PrivateGuards

export const isNotAutheticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthService );
  const router      = inject( Router );


  if ( authService.authStatus() === AuthStatus.authenticated ) {
    router.navigateByUrl( '/dashboard' );
    return true;
  }

  // const url = state.url;
  // localStorage.setItem( 'lastPath', url );


  return true;
};
