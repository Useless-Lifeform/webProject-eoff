import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MyServiceService } from '../../shared/services/my-service.service';

@Component({
  selector: 'app-bedikt',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './bedikt.component.html',
  styleUrl: './bedikt.component.scss',
  standalone: true
})
export class BediktComponent {
  bent: boolean;
  constructor(private loadingService: MyServiceService){
    this.bent = this.loadingService.checkLoggedStatus();
    if(!this.bent){
      window.location.href ='/home';
    }
  }


  onSubmit() {
    
  }
}