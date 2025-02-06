import { inject, Injectable } from '@angular/core';
import { BackendService } from '../../../../+shared/+services/backend.service';
import { AuthRequest } from '../models/aut.request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backend=inject(BackendService);
  login(data:AuthRequest){
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
