import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {merge} from 'rxjs';
import { AuthService } from '../../shared/service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [MatFormFieldModule, MatInputModule, FormsModule,    ReactiveFormsModule, MatButtonModule, MatIconModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {
  /*readonly*/ email = new FormControl('', [Validators.required, Validators.email]);
  passw = new FormControl('', [Validators.required, Validators.minLength(1)]);
  authSubscription?: Subscription;

  errorMessage = signal('');

  constructor( private authService: AuthService, private router: Router) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  login(){
    if(this.email.invalid){
      this.updateErrorMessage();
      console.log("rossz email formátum")
      return;
    }
    if(this.passw.invalid){
      this.updateErrorMessage();
      console.log("rossz jelszó formátum")
      return;
    }
    const emailValue = this.email.value || '' ;
    const passwValue = this.passw.value || '' ;

    this.authService.signIn(emailValue, passwValue)
    .then((userCredential) => {
      console.log('Login successful:', userCredential);
      this.authService.updateLoginStatus(true);
      this.router.navigateByUrl('/home');
    })
    .catch(error => {
      console.error('Login error:', error);
      
      switch(error.code){
        case 'auth/user-not-found':
          this.errorMessage.set('Nincs ilyen felhasználó!');
          break;
        case 'auth/wrong-password':
          this.errorMessage.set('Hibás jelszó!');
          break;
        default:
          this.errorMessage.set('Hiba történt a bejelentkezés során!');
          break;
      }
    });
  }

  
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Mező kitöltése kötelező!');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Nem megfelelő formátum!');
    } else {
      this.errorMessage.set('');
    }
  }
  
  // Toggle the visibility of the password field
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }
}