// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQtUaGTftUnSteOI9IAQSTB0ZIi4nGuIA",
  authDomain: "elenvase-739d5.firebaseapp.com",
  projectId: "elenvase-739d5",
  storageBucket: "elenvase-739d5.appspot.com",
  messagingSenderId: "936905941638",
  appId: "1:936905941638:web:4119162983e07bce5a6707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;