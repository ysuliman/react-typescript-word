// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGv3n9nN8gmZ9TBe6BIakpja0nxiSW7jI",
    authDomain: "word-yousef.firebaseapp.com",
    projectId: "word-yousef",
    storageBucket: "word-yousef.appspot.com",
    messagingSenderId: "722699855423",
    appId: "1:722699855423:web:d3c20857d8830f84f7fa8a",
    measurementId: "G-0928LB58MS"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase products/services
const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)


// 