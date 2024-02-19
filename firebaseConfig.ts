import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from "firebase/database";


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBNJHeNzF9S1o-eQEnflIyViEJmzs3qUp4",
    authDomain: "balaa-466bd.firebaseapp.com",
    databaseURL: "https://balaa-466bd-default-rtdb.firebaseio.com/",
    projectId: "balaa-466bd",
    storageBucket: "balaa-466bd.appspot.com",
    messagingSenderId: "204286365293",
    appId: "1:204286365293:web:a0544d05c055e2bbf57964"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);


