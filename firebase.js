// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDazwflfX7F4RYHilN6B6A5uCTEi0Q-fHg",
    authDomain: "dinder-application.firebaseapp.com",
    projectId: "dinder-application",
    storageBucket: "dinder-application.appspot.com",
    messagingSenderId: "898054924165",
    appId: "1:898054924165:web:d197bb842de0ecba52c6ec",
    measurementId: "G-0H2TGB042G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const auth = getAuth();
const db = getFirestore();

export { analytics, auth, db}