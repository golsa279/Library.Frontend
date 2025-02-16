import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [MatButton],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  menu() {
    this.router.navigateByUrl('/home');
  }
  router = inject(Router);
}
