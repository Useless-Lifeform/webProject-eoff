import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  checkLoggedStatus(){
    if(localStorage.getItem('isLogedIN') === 'true'){ return true;}
    return false;
  }
}
