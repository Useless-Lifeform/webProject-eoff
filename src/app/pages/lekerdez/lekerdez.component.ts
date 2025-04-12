import { Component, OnInit } from '@angular/core';
import { BediktDataService, BediktCard } from '../../shared/services/bedikt-data.service';
import { DiktalasComponent } from '../../shared/components/diktalas/diktalas.component';

@Component({
  selector: 'app-lekerdez',
  imports: [ DiktalasComponent ],
  templateUrl: './lekerdez.component.html',
  styleUrl: './lekerdez.component.scss'
})
export class LekerdezComponent implements OnInit {
  cards: BediktCard[] = [];

  constructor(private dataService: BediktDataService) {}

  ngOnInit() {
    this.cards = this.dataService.getCards()/*.subscribe(data => {
      this.cards = data;
    });*/
  }
}
