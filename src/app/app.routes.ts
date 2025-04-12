import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BediktComponent } from './pages/bedikt/bedikt.component';
import { LekerdezComponent } from './pages/lekerdez/lekerdez.component';

export const routes: Routes = [
    {path: 'home', title: "Főoldal",
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
    {path: 'login', title: "Bejelentkezés",
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)},
    {path: "bedikt", title: 'Bediktálás', 
        loadComponent: () => import('./pages/bedikt/bedikt.component').then(m => m.BediktComponent)  },
    {path: 'lekerdez', title: 'Lekérdezés', 
        loadComponent: () => import('./pages/lekerdez/lekerdez.component').then(m => m.LekerdezComponent)  },

    {path: '', component: HomeComponent},
    {path: '**', component: HomeComponent}
];
