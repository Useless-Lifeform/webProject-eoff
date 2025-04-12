import { Component,Input } from '@angular/core';
import {BediktCard } from '../../../shared/services/bedikt-data.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-diktalas',
  imports: [MatCardModule],
  styleUrl: '../../../pages/lekerdez/lekerdez.component.scss',
  templateUrl: './diktalas.component.html',
})
export class DiktalasComponent {
  @Input() card!: BediktCard;
}