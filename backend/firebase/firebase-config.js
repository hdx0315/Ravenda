
// backend/firebase/firebase-config.js
// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "ravenda-test-hdxas.firebaseapp.com",
    projectId: "ravenda-test-hdxas",
    storageBucket: "ravenda-test-hdxas.appspot.com",
    messagingSenderId: "1054527040105",
    appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const imageDB = getStorage(app);

export { imageDB, getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable };


