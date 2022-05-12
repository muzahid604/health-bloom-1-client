// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnfXSbCEGWXXD3VUOOs6dEXktavqjgoC4",
    authDomain: "health-bloom-e7885.firebaseapp.com",
    projectId: "health-bloom-e7885",
    storageBucket: "health-bloom-e7885.appspot.com",
    messagingSenderId: "340993759166",
    appId: "1:340993759166:web:3bec27d51c503b43140bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
