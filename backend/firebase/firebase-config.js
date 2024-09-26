

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "ravenda-test-2.firebaseapp.com",
    projectId: "ravenda-test-2",
    storageBucket: "ravenda-test-2.appspot.com",
    messagingSenderId: "264589480324",
    appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const imageDB = getStorage(app);
const detailsDB = getFirestore(app);

export { imageDB, detailsDB, ref, uploadBytes, getDownloadURL, collection, addDoc, uploadBytesResumable };


