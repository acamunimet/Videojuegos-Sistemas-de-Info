// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {} from "firebase/storage";
import {} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjpXn_q1vnt-3WFIn4uJJhcgwgQHiJcQo",
  authDomain: "microproyecto-2-d388b.firebaseapp.com",
  projectId: "microproyecto-2-d388b",
  storageBucket: "microproyecto-2-d388b.appspot.com",
  messagingSenderId: "806177898411",
  appId: "1:806177898411:web:11c363d2c29bc828735cee",
  measurementId: "G-EJLGGR0D4D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);