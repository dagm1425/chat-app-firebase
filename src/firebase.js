import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH-gqFOPUf51vbUYTm_EbbuReFzptVpJQ",
  authDomain: "chat-app-firebase-7d717.firebaseapp.com",
  projectId: "chat-app-firebase-7d717",
  storageBucket: "chat-app-firebase-7d717.appspot.com",
  messagingSenderId: "594848021991",
  appId: "1:594848021991:web:056918910673f733525142",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
