// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoS-yHGgO5Rb8V5ZVdtgAgRW8_uA9AMlg",
  authDomain: "whereisit-app.firebaseapp.com",
  projectId: "whereisit-app",
  storageBucket: "whereisit-app.firebasestorage.app",
  messagingSenderId: "669857680526",
  appId: "1:669857680526:web:6d85342093a10882584ddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)