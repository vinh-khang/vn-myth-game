import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDqDJiOes7UgDeGE3IV2L2W9fgwgC3v8dw",
  authDomain: "vn-myth-game-dtb.firebaseapp.com",
  projectId: "vn-myth-game-dtb",
  storageBucket: "vn-myth-game-dtb.appspot.com",
  messagingSenderId: "888588202127",
  appId: "1:888588202127:web:6d23df40ecaae22f0700fa",
  measurementId: "G-HEW5QQ7BHM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
db.settings({ timestampsInSnapshots: true });

export { db, auth, firebase };
