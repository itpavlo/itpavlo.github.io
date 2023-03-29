// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDv2WMz8wqMtOKJJttHEbW2P_nbOzazzkU",
    authDomain: "project-8763730159375932568.firebaseapp.com",
    projectId: "project-8763730159375932568",
    storageBucket: "project-8763730159375932568.appspot.com",
    messagingSenderId: "1077960709514",
    appId: "1:1077960709514:web:6481be404ea38cffd7a473"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default getFirestore();
