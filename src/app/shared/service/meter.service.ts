import { Injectable } from '@angular/core';
import { Firestore, collection, setDoc, getDocs, doc, query, where } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import {  getAuth } from 'firebase/auth';
import { CollectionReference, DocumentData } from 'firebase/firestore';

export interface Meter {
  serial: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class MeterService {
  private metersCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore, private auth: Auth) {
    this.metersCollection = collection(this.firestore, 'meters');
  }

  async addMeter(serial: string): Promise<void> {// új mérőóra hozzáadása
    const user = this.auth.currentUser;

    if (!user) {
      throw new Error('User not authenticated');
    }

    const meter: Meter = {
      serial: serial,
      userId: user.uid
    };

    const meterDocRef = doc(this.firestore, 'meters', serial);  // <--- itt állítod be az ID-t
    await setDoc(meterDocRef, meter);
    //await addDoc(this.metersCollection, meter);
  }

  async getMeters(): Promise<string[]> {
    const user = this.auth.currentUser;
  
    if (!user) {
      throw new Error('User not authenticated');
    }
  
    const metersRef = collection(this.firestore, 'meters');
    const q = query(metersRef, where('userId', '==', user.uid));
    const snapshot = await getDocs(q);
  
    const meters: string[] = snapshot.docs.map(doc => {
      const data = doc.data() as Meter;
      return data.serial;
    });
  
    return meters;
  }





}