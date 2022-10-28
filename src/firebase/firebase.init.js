// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN, 
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGCENTERID,
  appId: process.env.REACT_APP_APPID,
  // apiKey: "AIzaSyD2Y8zXYVV6WJRAc06aTKxjrFnvbzZ71zc",
  // authDomain: "computer-learning-club.firebaseapp.com",
  // projectId: "computer-learning-club",
  // storageBucket: "computer-learning-club.appspot.com",
  // messagingSenderId: "984717291323",
  // appId: "1:984717291323:web:0a6bdd7949cbf2b875911e"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;