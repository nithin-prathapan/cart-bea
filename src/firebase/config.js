// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA73KfROJ4Dfbx9HK90Kf8btLVlWsDCsK8",
    authDomain: "cartbae-53ab0.firebaseapp.com",
    projectId: "cartbae-53ab0",
    storageBucket: "cartbae-53ab0.appspot.com",
    messagingSenderId: "423609394031",
    appId: "1:423609394031:web:f508da9b81cb85cfc13e9a",
    measurementId: "G-EP2214RGRS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const auth = getAuth(app)
export { auth }