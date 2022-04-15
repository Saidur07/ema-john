// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV5SinxnGgqlfG7fAGCicrAfxNgRQTwHg",
  authDomain: "ema-john-with-auth-326cf.firebaseapp.com",
  projectId: "ema-john-with-auth-326cf",
  storageBucket: "ema-john-with-auth-326cf.appspot.com",
  messagingSenderId: "84913070327",
  appId: "1:84913070327:web:592f6d9e2d0d8f5e2b73f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
