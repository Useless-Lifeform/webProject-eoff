import {Component, OnInit, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';

import { MeterService } from '../../shared/service/meter.service';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-bedikt',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatSlideToggleModule],
  templateUrl: './bedikt.component.html',
  styleUrl: './bedikt.component.scss',
  standalone: true
})
export class BediktComponen  implements OnInit {


  ujMeroValue: string = '';
  isChecked = true;
  meters: string[] = [];
  selectedValue: string;
  meroallas: number = 0;

  //TODO: isChecked választóval csak az egyik form jelenjen meg
  //TODO: user mérőóráinak lekérése és selectbe való betöltése              FONTOS!!
  constructor(private meterService: MeterService)
  {
    this.selectedValue = 'steak-0';
  }
  async ngOnInit() {
    try {
      this.meters = await this.meterService.getMeters();
      if (this.meters.length > 0) {
        this.selectedValue = this.meters[0];  // automatikus választás
      }
    } catch (err) {
      console.error('Hiba a mérőórák lekérdezésekor:', err);
    }
  }
  


  async addMero() { // múkszik
    try {
      if (!this.ujMeroValue) {return;}
      await this.meterService.addMeter(this.ujMeroValue);
      alert('Mérőóra sikeresen hozzáadva!');
      this.getMerok();
    } catch (error) {
      console.error('Hiba a mentés közben:', error);
      alert('Hiba történt a hozzáadás során.');
    }
  }

  async bediktalas() {
    if (!this.selectedValue || !this.meroallas) return;
  
    // TODO: ide jön majd a Firestore-ba mentés a selectedValue + meroallas alapján
    console.log(`Mentés: ${this.selectedValue} - ${this.meroallas} kWh`);
  
    alert('Mérés rögzítve!');
  }
  


  async getMerok(){
    this.meterService.getMeters().then((merok) => {
      console.log(merok);

      this.meters = merok;

    }).catch((error) => {
      console.error('Hiba a mérőórák lekérésekor:', error);
    });
  }

}