// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjs-blog-970be.firebaseapp.com",
  projectId: "nextjs-blog-970be",
  storageBucket: "nextjs-blog-970be.appspot.com",
  messagingSenderId: "507093166174",
  appId: "1:507093166174:web:bbb01a3b71f2373a2b6ccf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
