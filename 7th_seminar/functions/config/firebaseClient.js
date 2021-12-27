import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOVAdGcCWyoNQMEqFs9OLIVNjcaoRCLTY",
  authDomain: "wesopt29-33848.firebaseapp.com",
  projectId: "wesopt29-33848",
  storageBucket: "wesopt29-33848.appspot.com",
  messagingSenderId: "783523500446",
  appId: "1:783523500446:web:2d29a74d6c90ef8cf0868f",
  measurementId: "G-5C0WS4MDN7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

module.exports={firebaseApp,firebaseAuth,firebaseConfig}