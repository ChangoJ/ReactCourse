// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATGUO9k9mYpajGjw0wYCzVlD87csgcr80",
  authDomain: "react-cursos-fbf5c.firebaseapp.com",
  projectId: "react-cursos-fbf5c",
  storageBucket: "react-cursos-fbf5c.firebasestorage.app",
  messagingSenderId: "788570324514",
  appId: "1:788570324514:web:4413cbeb111d75f3a6147b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)

export const FirebaseDB = getFirestore(FirebaseApp)