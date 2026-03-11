import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAVJGoFSG1pMEsJJPDZZM0ZNVwwk3Dikc",
  authDomain: "nelzon-designers.firebaseapp.com",
  projectId: "nelzon-designers",
  storageBucket: "nelzon-designers.firebasestorage.app",
  messagingSenderId: "11865687208",
  appId: "1:11865687208:web:011db9772d4fa5dacd6e9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)