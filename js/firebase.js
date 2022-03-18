// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXLSn0-7XS0G1_rV7tSaMD9SL_j_zLbrs",
  authDomain: "nuevosufragio.firebaseapp.com",
  projectId: "nuevosufragio",
  storageBucket: "nuevosufragio.appspot.com",
  messagingSenderId: "712385984003",
  appId: "1:712385984003:web:7c469c350a7ac9d910c036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
export const db = getFirestore(app);



  


