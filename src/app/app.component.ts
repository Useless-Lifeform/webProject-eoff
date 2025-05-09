import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,/*AppModule, HomeComponent,*/ MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'webkert-prjct-gvenbh';
  isLoggedIn = false;//(localStorage.getItem('isLoggedIn') === "true" ? true : false);
  private authSubscription?: Subscription;

  constructor(private authService: AuthService) {}


  ngOnInit(): void {
    this.authSubscription = this.authService.currentUser.subscribe(user =>{
      this.isLoggedIn = !!user;
      localStorage.setItem('isLoggedIn', this.isLoggedIn ? 'true' : 'false');
      console.log("app.component.ts - isLoggedIn: ", this.isLoggedIn);
      console.log("app.component.ts - user: ", user);
    });
  }
  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe();
  }
  logout(): void{
    this.authService.signOut();
  }

}
