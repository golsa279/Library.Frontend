import { inject, Injectable } from '@angular/core';
import { BackendService } from '../../../+shared/+services/backend.service';
import { Auth2Request } from '../models/auth2.request';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  backend=inject(BackendService);
  login(data:Auth2Request){
    return this.backend.post('api/security/login',data);
  }
  setToken(accessToken:string,refreshToken:string){
    sessionStorage.setItem('accessToken',accessToken);
    sessionStorage.setItem('refreshToken',refreshToken);
  }
  unsetToken(){
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
  }
  isSignIn(){
    return sessionStorage.getItem('accessToken')!=undefined;
  }
}
