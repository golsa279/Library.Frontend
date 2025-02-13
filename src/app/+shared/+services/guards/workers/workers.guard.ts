import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth2Service } from '../../../../+pages/auth2/services/auth2.service';

export const workersGuard: CanActivateFn = (route, state) => {
    const auth=inject(Auth2Service);
    if (!auth.isSignIn()){
      const router=inject(Router);
      router.navigateByUrl('/login-workers');
      return false;
    }
    return true;
};
