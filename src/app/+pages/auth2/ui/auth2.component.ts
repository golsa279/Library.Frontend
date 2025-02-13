import { Component, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../auth/ui/services/auth.service';
import { Router } from '@angular/router';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Auth2Request } from '../models/auth2.request';
import { Auth2OkResponse } from '../models/auth2.ok.response';

@Component({
  selector: 'app-auth2',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './auth2.component.html',
  styleUrl: './auth2.component.css'
})
export class Auth2Component {
  auth = inject(AuthService);
  router = inject(Router);
  readonly username = new FormControl('', [Validators.required]);
  readonly password = new FormControl('', [Validators.required]);
  usernameErrorMessage = signal('');
  passwordErrorMessage = signal('');
  serverMessage = signal('');
  busy = false;
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
    const loginData: Auth2Request = {
      username: this.username.value ?? '',
      password: this.password.value ?? ''
    };
    this.serverMessage.set('');
    this.busy = true;
    this.auth.login(loginData).subscribe({
      next: (res: any) => {
        this.busy = false;
        if (res['detail']) {
          this.serverMessage.set('نام کاربری یا کلمه عبور صحیح نیست')
        }
        else if (res['accessToken']) {
          const response = res as Auth2OkResponse;
          this.auth.setToken(response.accessToken, response.refreshToken);
          this.router.navigateByUrl('/workers');
        }
        console.log('Ok');
      },
      error: (error) => {
        this.busy = false;
        this.serverMessage.set('برقراری ارتباط با سرور دهنده امکان پذیر نیست');
      }
    });
    console.log('berim baraye backend');
  }
}
