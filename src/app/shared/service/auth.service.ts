import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth,
  User,
  signInWithEmailAndPassword,
  signOut,
  authState,
  UserCredential,
  User as FirebaseUser,
  createUserWithEmailAndPassword
 } from '@angular/fire/auth';
 import { 
  Firestore, 
  collection, 
  doc, 
  setDoc 
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<User | null>;

  constructor(private auth: Auth, private firestore: Firestore, private router: Router) {
    this.currentUser = authState(this.auth);
  }

  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async regist(email: string, password: string, kNev: string): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      
      await this.createUserData(userCredential.user.uid, kNev);

      return userCredential;
    } catch (error) {
      console.error('Hiba a regisztráció során:', error);
      throw error;
    }
  }

  private async createUserData(userId: string, kNev:string ): Promise<void> {
    const userRef = doc(collection(this.firestore, 'users'), userId);
    
    return setDoc(userRef, new Map<string, string>().set("name", kNev));
  }
  




  signOut(): Promise<void> {
    localStorage.setItem('isLoggedIn', 'false');
    return signOut(this.auth).then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  isLoggedIn(): Observable<User | null>{
    return this.currentUser;
  }

  updateLoginStatus(isLoggedIn: boolean): void {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
  }

}//tom@mail.com = 123456
