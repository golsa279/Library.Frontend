import { HttpInterceptorFn } from '@angular/common/http';

export const mainInterceptor: HttpInterceptorFn = (req, next) => {
  if(sessionStorage.getItem('accessToken')){
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer '+sessionStorage.getItem('accessToken'))
    });
    return next(authReq);
  }
  return next(req);
};
