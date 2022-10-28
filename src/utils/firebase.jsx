// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN0DHcV-bRiEr63gRdtrZph22uFaKHRlo",
    authDomain: "wulfric-1285a.firebaseapp.com",
    projectId: "wulfric-1285a",
    storageBucket: "wulfric-1285a.appspot.com",
    messagingSenderId: "1034719015784",
    appId: "1:1034719015784:web:f806e5010f9f1239269cdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//crear instancia de la base de datos
export const db = getFirestore(app);