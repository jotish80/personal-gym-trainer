 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyBmQQGYLPMrTE-F192NKHTy528ggMmBDCo",
  authDomain: "personal-gym-trainer-cccb5.firebaseapp.com",
  projectId: "personal-gym-trainer-cccb5",
  storageBucket: "personal-gym-trainer-cccb5.appspot.com",
  messagingSenderId: "600754345463",
  appId: "1:600754345463:web:75c6f2153eb56c0fb70af2"  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
 export default auth;