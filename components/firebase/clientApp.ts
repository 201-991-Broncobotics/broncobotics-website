import { initializeApp } from "firebase/app";

// online they said that exposing this stuff isnt bad so hopefully no one will hack this
const app = initializeApp({
   apiKey: "AIzaSyBmvvJxjspVsKolGreRuqGBWXk36AhVCuQ",
   authDomain: "broncobotics-website.firebaseapp.com",
   projectId: "broncobotics-website",
   storageBucket: "broncobotics-website.appspot.com",
   messagingSenderId: "33579810293",
   appId: "1:33579810293:web:2fe661f4116d8f4c71b4bc",
   measurementId: "G-690LZ8842K",
});

export { app };
