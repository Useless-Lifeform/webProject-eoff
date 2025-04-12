import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, /*RouterLinkActive,*/ MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() isLogedIN: boolean = (localStorage.getItem('isLogedIN') === "true" ? true : false);

  logout(){
    console.log("menu-logout-katt");
    
    localStorage.setItem('isLogedIN', 'false');
    window.location.href ='/home';
  }

  //@Output() nextPage: EventEmitter<string> = new EventEmitter();
  //kimenő változó ami event EZT FIGYELI A app componens HTML FÁJLJA!!!

  /*goTo(nexPage: string){
    this.nextPage.emit(nexPage);
  }*/
}
