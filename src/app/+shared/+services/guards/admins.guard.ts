import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../+pages/auth/ui/services/auth.service';
import { inject } from '@angular/core';

export const adminsGuard: CanActivateFn = (route, state) => {
  const auth=inject(AuthService);
  if (!auth.isSignIn()){
    const router=inject(Router);
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
