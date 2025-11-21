import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import * as firebaseui from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyDKDFO3AeKTbxaCVX8NgVQTaI3cYNyw5cg", // <--- do not commit
  authDomain: "sewproject-8debb.firebaseapp.com",
  projectId: "sewproject-8debb",
  storageBucket: "sewproject-8debb.firebasestorage.app",
  messagingSenderId: "1055056163677",
  appId: "1:1055056163677:web:fab7ca6c090ecc43022eb4",
  measurementId: "G-KD4Z78PEWN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
const ui = new firebaseui.auth.AuthUI(auth);
