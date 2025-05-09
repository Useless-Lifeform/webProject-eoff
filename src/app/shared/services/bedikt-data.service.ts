import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface BediktCard{
    datum: number;
    meroSzam: string
    meroAllas: string

}

@Injectable({
    providedIn: 'root'
})
export class BediktDataService {
    fakeData: BediktCard[] = [{datum: 1, meroSzam: "1234VAN", meroAllas: '999999'},
            {datum: 2, meroSzam: "1994VAN", meroAllas: '900099'}
    ]

    constructor() { }

    getCards():  BediktCard[]  {
        return this.fakeData;
    }
    //TODO:   mérőórák lekérdezése, by userID
    //        új mérőóra hozzáadása
    //        (mérőóra törlése, mérés törlése)
    //        mérések lekérdezése  by mérőóraID
    //        új mérés hozzáadása


    
}
