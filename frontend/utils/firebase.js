// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvirtualcourses-95a40.firebaseapp.com",
  projectId: "loginvirtualcourses-95a40",
  storageBucket: "loginvirtualcourses-95a40.firebasestorage.app",
  messagingSenderId: "192247804939",
  appId: "1:192247804939:web:ffde2673c6908474d1830e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export {auth,provider}