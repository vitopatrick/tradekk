// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc8oD8M7EIsQQr-K16kAg7lV8s4s1aBWY",
  authDomain: "tradekk-email-list.firebaseapp.com",
  projectId: "tradekk-email-list",
  storageBucket: "tradekk-email-list.appspot.com",
  messagingSenderId: "236039707429",
  appId: "1:236039707429:web:dfbc720397e1fb405758cc",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
