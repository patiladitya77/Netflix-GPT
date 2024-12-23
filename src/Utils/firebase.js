// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBy0HOcCbVLXVaKgfv5PwOueL1Dr5MG9oc",
    authDomain: "netflixgpt-1d060.firebaseapp.com",
    projectId: "netflixgpt-1d060",
    storageBucket: "netflixgpt-1d060.firebasestorage.app",
    messagingSenderId: "765349914221",
    appId: "1:765349914221:web:6fe0417f30dec3cd30c164",
    measurementId: "G-9SCZVTNW6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();