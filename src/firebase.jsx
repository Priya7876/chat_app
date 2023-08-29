// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3aY5Kl7EBmVLycsQaYRUJJzHAoPGIf4k",
  authDomain: "chat-app-e7f40.firebaseapp.com",
  projectId: "chat-app-e7f40",
  storageBucket: "chat-app-e7f40.appspot.com",
  messagingSenderId: "315122576213",
  appId: "1:315122576213:web:28547a4094504d71f89ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);