'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';
import { useMemo, DependencyList } from 'react';

export function initializeFirebase(): {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
} {
  // Use a fallback config if actual keys are missing to prevent crash during initial dev setup
  const isConfigValid = firebaseConfig.apiKey && firebaseConfig.apiKey !== "placeholder-key";
  
  const app = getApps().length === 0 
    ? initializeApp(isConfigValid ? firebaseConfig : { apiKey: "fake-key-for-dev", projectId: "fake-project-id" }) 
    : getApp();
    
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return { app, auth, firestore };
}

export function useMemoFirebase<T>(factory: () => T, deps: DependencyList): T {
  return useMemo(factory, deps);
}

export * from './provider';
export * from './auth/use-user';
export * from './firestore/use-doc';
export * from './firestore/use-collection';
