import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Lazy singleton — only initialised on first request, never at build time.
let db: ReturnType<typeof getFirestore> | null = null;

export function getAdminDb() {
  if (db) return db;

  if (getApps().length === 0) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Vercel stores the key with literal \n — convert back to real newlines.
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }

  db = getFirestore();
  return db;
}
