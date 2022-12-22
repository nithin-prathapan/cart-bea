// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyA73KfROJ4Dfbx9HK90Kf8btLVlWsDCsK8",
    authDomain: "cartbae-53ab0.firebaseapp.com",
    projectId: "cartbae-53ab0",
    storageBucket: "cartbae-53ab0.appspot.com",
    messagingSenderId: "423609394031",
    appId: "1:423609394031:web:f508da9b81cb85cfc13e9a",
    measurementId: "G-EP2214RGRS"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const auth = getAuth(app)
export { auth }
export const db = getFirestore(app);
export const storage = getStorage(app);