// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQLDMmc0Aiu-CUbEf7_4mdk5psmnvJzDI",
    authDomain: "genious-car-services-3c54d.firebaseapp.com",
    projectId: "genious-car-services-3c54d",
    storageBucket: "genious-car-services-3c54d.appspot.com",
    messagingSenderId: "812091140553",
    appId: "1:812091140553:web:002bfdf0f340c8bac9a018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;