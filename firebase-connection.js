// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9eoIN7zAG5Ztt6lLa9pwC74cthtJpBZc",
  authDomain: "test-project-9aa7d.firebaseapp.com",
  projectId: "test-project-9aa7d",
  storageBucket: "test-project-9aa7d.firebasestorage.app",
  messagingSenderId: "62613305761",
  appId: "1:62613305761:web:20f3986cfde5755b4673e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db} ;