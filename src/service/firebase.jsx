// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//import.meta.env.VITE_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: "AIzaSyAmsK9kPddTYPaeOt_50l4qQD_zKZDPsn0",
  authDomain: "vilucap-8d16f.firebaseapp.com",
  projectId: "vilucap-8d16f",
  storageBucket: "vilucap-8d16f.firebasestorage.app",
  messagingSenderId: "477011585627",
  appId: "1:477011585627:web:ec06a797f449afb4d62d7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
