// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKF16Ga3P7HloDFV3CNzJmCkPj5H8fpKs",
  authDomain: "blog-app-1043f.firebaseapp.com",
  projectId: "blog-app-1043f",
  storageBucket: "blog-app-1043f.appspot.com",
  messagingSenderId: "1020829148958",
  appId: "1:1020829148958:web:d6aad264d79b96deb98b0f",
  measurementId: "G-J0XRCKDLVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
