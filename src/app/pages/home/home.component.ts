import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @Output() goToLogin=new EventEmitter<string>();
  sendEmit(){
    this.goToLogin.emit("login");
  }

}
