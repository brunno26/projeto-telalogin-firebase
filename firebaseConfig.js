// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAwgtLWdR-08lEYIW9gdV1wJVbiTAfFFA", //ok
  authDomain: "com.senac.tela_login_bruno", // ok
  projectId: "senac-app-login-bruno-61910", // ok
  storageBucket: "senac-app-login-bruno-61910.firebasestorage.app",
  messagingSenderId: "948262337888", // ok
  appId: "1:948262337888:android:5958c80914a5ae7899b205", // ok
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };