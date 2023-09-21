import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {

    apiKey: "AIzaSyCgXogkct84oPo9VpAlIJHQtTctazIFio4",

    authDomain: "rentamaid-8b693.firebaseapp.com",

    projectId: "rentamaid-8b693",

    storageBucket: "rentamaid-8b693.appspot.com",

    messagingSenderId: "100200630822",

    appId: "1:100200630822:web:819d0d036f6739d515f4e7"

};


export const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase