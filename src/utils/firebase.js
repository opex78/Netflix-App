// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAH7KTfZEJssYz125Aws1DTyXNRDRHFebk",
    authDomain: "netflix-app-6e039.firebaseapp.com",
    projectId: "netflix-app-6e039",
    storageBucket: "netflix-app-6e039.firebasestorage.app",
    messagingSenderId: "447693730958",
    appId: "1:447693730958:web:1a45066256d930b85985df",
    measurementId: "G-MKXR4SNWL5"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();