// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkd4FrSBqHVGdS6AQLYfMGXKlrV2WlKh8",
  authDomain: "flamigo-6ad77.firebaseapp.com",
  projectId: "flamigo-6ad77",
  storageBucket: "flamigo-6ad77.appspot.com",
  messagingSenderId: "156400638157",
  appId: "1:156400638157:web:29f06070a164bb0dc27184",
  measurementId: "G-QLDKRVXFER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
