import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, /*RouterLinkActive,*/ MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnDestroy, OnInit {
  @Input() isLoggedIn: boolean = false;//(localStorage.getItem('isLoggedIn') === "true" ? true : false);
  @Output() logoutEvent = new EventEmitter<void>();

  private authSubscription?: Subscription
  constructor(private authService: AuthService) { 
    console.log("    ----menu constructor");
  }
  ngOnInit(): void {
    this.authSubscription = this.authService.currentUser.subscribe(user =>{
      //this.isLoggedIn = !!user;
      this.isLoggedIn =(localStorage.getItem('isLoggedIn') === "true" ? true : false);
      console.log("menu.ts - OnInit");
    });
  }

  logout(){
    console.log("menu-logout-katt");
    
    this.authService.signOut().then(() => {
      this.logoutEvent.emit();
      //closeSideMenu
    });
    //localStorage.setItem('isLoggedIn', 'false');
    //window.location.href ='/home';
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }

  //@Output() nextPage: EventEmitter<string> = new EventEmitter();
  //kimenő változó ami event EzT FIGYELI A app componens HTML fájlja.
}
