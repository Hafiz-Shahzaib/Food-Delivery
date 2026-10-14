// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vingo-8b9d7.firebaseapp.com",
  projectId: "vingo-8b9d7",
  storageBucket: "vingo-8b9d7.firebasestorage.app",
  messagingSenderId: "162387602889",
  appId: "1:162387602889:web:dc0e40123de46a3f3c4c18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app, auth}