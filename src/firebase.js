// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-36e5c.firebaseapp.com",
  projectId: "blog-36e5c",
  storageBucket: "blog-36e5c.appspot.com",
  messagingSenderId: "1002134297582",
  appId: "1:1002134297582:web:91ee71a677a5e9cb53ccff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);