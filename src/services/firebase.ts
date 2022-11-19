// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzBlMS4P9upJI_Ciq6cRxDrkItE5irg4Q",
  authDomain: "memo-teste.firebaseapp.com",
  projectId: "memo-teste",
  storageBucket: "memo-teste.appspot.com",
  messagingSenderId: "440039411984",
  appId: "1:440039411984:web:45ca39c555a2b1aba01595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);