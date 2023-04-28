import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithCredential,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDazwflfX7F4RYHilN6B6A5uCTEi0Q-fHg",
    authDomain: "dinder-application.firebaseapp.com",
    projectId: "dinder-application",
    storageBucket: "dinder-application.appspot.com",
    messagingSenderId: "898054924165",
    appId: "1:898054924165:web:d197bb842de0ecba52c6ec",
    measurementId: "G-0H2TGB042G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
    auth,
    db,
    GoogleAuthProvider,
    signInWithCredential,
    signOut,
    onAuthStateChanged,
};