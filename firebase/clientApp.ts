import { initializeApp } from "firebase/app";

const app = initializeApp({
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: "broncobotics.vercel.app",
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});

export { app };
