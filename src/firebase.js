import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyA4DHIWVlSxMiqezb6MU7zHVplAYKg5q2w",
  authDomain: "project-d4698.firebaseapp.com",
  projectId: "project-d4698",
  storageBucket: "project-d4698.appspot.com",
  messagingSenderId: "229882964691",
  appId: "1:229882964691:web:82c46da9396fb258660226",
  measurementId: "G-K9FKHCTBHY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };