import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "link-care.firebaseapp.com",
  projectId: "link-care",
  storageBucket: "link-care.appspot.com",
  messagingSenderId: "479615206971",
  appId: "1:479615206971:web:6d8cee25a87e6d1a983e1e",
  measurementId: "G-0RC80BW2Z9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
