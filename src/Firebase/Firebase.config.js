// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNjNzIipDSdtGKfvkva7OXKVZ2lwJPmF4",
  authDomain: "tour-bang.firebaseapp.com",
  projectId: "tour-bang",
  storageBucket: "tour-bang.appspot.com",
  messagingSenderId: "1084150004392",
  appId: "1:1084150004392:web:4c4745ce1df4292f6d209d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth