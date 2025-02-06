import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { AuthRequest } from './models/aut.request';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { AuthOkResponse } from './models/auth.ok.response';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  auth = inject(AuthService);
  router = inject(Router);
  readonly username = new FormControl('', [Validators.required]);
  readonly password = new FormControl('', [Validators.required]);
  usernameErrorMessage = signal('');
  passwordErrorMessage = signal('');
  serverMessage=signal('');
  busy=false;
  constructor() {
    merge(this.username.statusChanges, this.username.valueChanges, this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updatePasswordErrorMessage());
  }

  updateUsernameErrorMessage() {
    if (this.username.hasError('required')) {
      this.usernameErrorMessage.set('نام کاربری وارد نشده');
    }
    else {
      this.usernameErrorMessage.set('');
    }
  }
  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.passwordErrorMessage.set('کلمه عبور وارد نشده');
    }
    else {
      this.passwordErrorMessage.set('');
    }
  }
  check() {
    const loginData:AuthRequest={
      username:this.username.value??'',
      password:this.password.value??''
    };
    this.serverMessage.set('');
    this.busy=true;
    this.auth.login(loginData).subscribe({
      next:(res:any)=>{
        this.busy=false;
        if(res['detail']){
          this.serverMessage.set('نام کاربری یا کلمه عبور صحیح نیست')
        }
        else if (res['accessToken']){
            const response=res as AuthOkResponse;
            this.auth.setToken(response.accessToken,response.refreshToken);
            this.router.navigateByUrl('/admins');
        }
        console.log('Ok');
      },
      error:(error)=>{
        this.busy=false;
        this.serverMessage.set('برقراری ارتباط با سرور دهنده امکان پذیر نیست');
      }
    });
    console.log('berim baraye backend');
  }
}

