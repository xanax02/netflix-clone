// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAalKnQLAl0Qe7bTkjCHznm_dEGyyi27Rk",
  authDomain: "netflix-clone-5ecef.firebaseapp.com",
  projectId: "netflix-clone-5ecef",
  storageBucket: "netflix-clone-5ecef.appspot.com",
  messagingSenderId: "71865596234",
  appId: "1:71865596234:web:852edee1c553d95e7be9b3",
  measurementId: "G-LPBKPF7V51",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
