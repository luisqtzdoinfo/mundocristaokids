'use client';

import React, { useEffect, useState } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

export function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<{
    app: FirebaseApp;
    auth: Auth;
    firestore: Firestore;
  } | null>(null);

  useEffect(() => {
    setServices(initializeFirebase());
  }, []);

  if (!services) {
    return null; 
  }

  return (
    <FirebaseProvider 
      firebaseApp={services.app} 
      auth={services.auth} 
      firestore={services.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
