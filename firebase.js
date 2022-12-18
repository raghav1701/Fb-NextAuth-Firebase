import * as firebase from "firebase/compat/app";
import "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJ5lH9VOTegiVWrN7-zwSb0nDZPBEUQx8",
  authDomain: "fb-firebase-f67fb.firebaseapp.com",
  projectId: "fb-firebase-f67fb",
  storageBucket: "fb-firebase-f67fb.appspot.com",
  messagingSenderId: "314918542780",
  appId: "1:314918542780:web:42713895cb600980029fb9",
  measurementId: "G-NE06Q64TKQ",
};

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
