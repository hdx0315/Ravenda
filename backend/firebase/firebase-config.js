// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

require('dotenv').config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ravenda-v1.firebaseapp.com",
  projectId: "ravenda-v1",
  storageBucket: "ravenda-v1.appspot.com",
  messagingSenderId: "557856776851",
  appId: process.env.APP_ID,
  measurementId: "G-LBSJ7WRDGC",


  storageBucket: 'images/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);