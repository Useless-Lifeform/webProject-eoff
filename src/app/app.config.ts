import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp(
      { projectId: "eoffapp-70e5d", appId: "1:382783477835:web:6b46e0fb4cca48a9dd95ce", storageBucket: "eoffapp-70e5d.firebasestorage.app",
        apiKey: "AIzaSyCdD5CpJc7fIR3EDKnDZoz32Ja3TLQ_OQU", authDomain: "eoffapp-70e5d.firebaseapp.com", messagingSenderId: "382783477835" })),
      provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
