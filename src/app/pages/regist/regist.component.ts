import { Component, signal } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
//import { User } from '../../shared/models/User';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-regist',
  imports: [MatProgressBarModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './regist.component.html',
  styleUrl: './regist.component.scss'
})
export class RegistComponent {
  isLoading: boolean = false;
  showForm: boolean = true;
  registError: string = '';
  //errorMessage = signal('');

  registForm = new FormGroup({
    
    email : new FormControl('', [Validators.required, Validators.email]),
    passw : new FormControl('', [Validators.required, Validators.minLength(6)]),
    passw2 : new FormControl('', [Validators.required, Validators.minLength(6)]),
    kNev : new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  constructor(private authService: AuthService, private router: Router) {}



  regist(): void{
    if (this.registForm.invalid) {
      this.registError = 'Elöbb javítsd az összes felmerülő hibát!';
      return;
    }
    const password = this.registForm.get('passw')?.value;
    const rePassword = this.registForm.get('passw2')?.value;
    
    if (password !== rePassword) {
      this.registError = 'A jelszavak nem egyeznek!';
      return;
    }

    this.isLoading = true;
    this.showForm = false;

    const email = this.registForm.value.email || '';
    const pw = this.registForm.value.passw || '';
    const kNev = this.registForm.value.kNev || '';

    this.authService.regist(email, pw, kNev)
      .then(userCredential => {
        console.log('Registration succesful:', userCredential.user);
        this.authService.updateLoginStatus(true);
        this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.error('Regisztrációs hiba:', error);
        this.isLoading = false;
        this.showForm = true;
        
        switch(error.code) {
          case 'auth/email-already-in-use':
            this.registError = 'This email already in use.';
            break;
          case 'auth/invalid-email':
            this.registError = 'Invalid email.';
            break;
          case 'auth/weak-password':
            this.registError = 'The password is too weak. Use at least 6 characters.';
            break;
          default:
            this.registError = 'An error has occurred during registration. Please try again later.';
        }
      });
  }

  updateErrorMessage() {

      //this.errorMessage = 'Kérjük, töltse ki az összes mezőt!';
  }


  // Toggle the visibility of the password field
  hide = signal(true);
   showHidePassw(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
   }

}
