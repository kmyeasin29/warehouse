/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlk1nqpN1XWA7b1icDm_k1c3Nz_b1FCIg",
  authDomain: "car-leader-client.firebaseapp.com",
  projectId: "car-leader-client",
  storageBucket: "car-leader-client.appspot.com",
  messagingSenderId: "769759126576",
  appId: "1:769759126576:web:e2b2d15806c738f16a79f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth