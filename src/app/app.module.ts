import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; // 🚀 Ezt kell hozzáadni!
import { BediktComponent } from './pages/bedikt/bedikt.component'; // Ha még nincs, importáld a komponenst is

@NgModule({
  declarations: [

    //BediktComponent // 🚀 Győződj meg róla, hogy itt is benne van!
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // 🚀 Ezt kell hozzáadni, hogy a formGroup működjön!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
