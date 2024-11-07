// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxsJvAO90oi3AdC1Hh2uoBYwaCDh34-xA",
  authDomain: "taskapp-d4e4c.firebaseapp.com",
  projectId: "taskapp-d4e4c",
  storageBucket: "taskapp-d4e4c.firebasestorage.app",
  messagingSenderId: "558878141768",
  appId: "1:558878141768:web:98755c3f92aa270bd8977d",
  measurementId: "G-15XCDCB8CY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);