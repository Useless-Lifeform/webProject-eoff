import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'; // 🚀 Ezt kell hozzáadni!
import { DiktalasComponent } from './shared/components/diktalas/diktalas.component';

@NgModule({
  declarations: [

    DiktalasComponent // 🚀 Győződj meg róla, hogy itt is benne van!
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // 🚀 Ezt kell hozzáadni, hogy a formGroup működjön!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
