// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMhieiXwx8OiWj9hoyq2yMXvN86lQjqyE",
  authDomain: "inentory-managment.firebaseapp.com",
  projectId: "inentory-managment",
  storageBucket: "inentory-managment.appspot.com",
  messagingSenderId: "24061375740",
  appId: "1:24061375740:web:dc86cab336a54855191379",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
