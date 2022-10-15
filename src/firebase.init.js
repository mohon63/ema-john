// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkxrx3Y7AUicu5OVj_9NWZxxHFz8dKOqg",
    authDomain: "ema-john-simple-ecbe9.firebaseapp.com",
    projectId: "ema-john-simple-ecbe9",
    storageBucket: "ema-john-simple-ecbe9.appspot.com",
    messagingSenderId: "861454874767",
    appId: "1:861454874767:web:4bf34a4120f041bba498fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;