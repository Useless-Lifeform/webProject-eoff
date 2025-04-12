import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
//import { NgIf } from '@angular/common';
import { BediktComponent } from './pages/bedikt/bedikt.component';
import { LekerdezComponent } from './pages/lekerdez/lekerdez.component';
import { LoginComponent } from './pages/login/login.component';
//import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,/*AppModule, HomeComponent,*/ MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webkert-prjct-gvenbh';
  currentPage = "home"

  changePage(nextPage: string){
    console.log(nextPage);
    this.currentPage = nextPage;
  }
}
