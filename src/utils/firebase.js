// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvlvYJn35K3jICk_Hf-Q0EEXASDwan-gE",
  authDomain: "netflixgpt-79121.firebaseapp.com",
  projectId: "netflixgpt-79121",
  storageBucket: "netflixgpt-79121.appspot.com",
  messagingSenderId: "456401322016",
  appId: "1:456401322016:web:dbe2a0b57c691d1d76bc45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
