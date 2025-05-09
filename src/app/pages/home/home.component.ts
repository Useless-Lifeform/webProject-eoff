import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router){}

  ngOnInit(): void {
      this.isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
  }

  // ez mi? ???
  @Output() goToLogin=new EventEmitter<string>();
  sendEmit(){
    this.goToLogin.emit("login");
  }

}
