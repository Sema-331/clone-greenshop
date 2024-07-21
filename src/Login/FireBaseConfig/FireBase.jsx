// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA23w3jo_RivW-pvO9yVyuqlNNX62zFaEM",
  authDomain: "greenshop-8372d.firebaseapp.com",
  projectId: "greenshop-8372d",
  storageBucket: "greenshop-8372d.appspot.com",
  messagingSenderId: "703476102833",
  appId: "1:703476102833:web:489532e94bbd8ad8a45490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getAuth(app)