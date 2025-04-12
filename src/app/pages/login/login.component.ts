import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {merge} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
  /*readonly*/ email = new FormControl('', [Validators.required, Validators.email]);
  passw = new FormControl('');
  //passw2 = new FormControl('');

  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  login(){
    console.log("katt");
    console.log(this.email.value);
    console.log(this.passw.value);
    
    if(this.email.value === "test" && this.passw.value === "test"){
      console.log("jó");
      
      localStorage.setItem('isLogedIN','true');

      window.location.href='/home';
    }
    else{
      //hiba van, elgépelte vagy nincs ilyen!
    }
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

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}