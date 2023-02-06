import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyByTHgBTit4olYqVWd_SzbtOC6sTelxZQ0",
  authDomain: "rad-threads.firebaseapp.com",
  projectId: "rad-threads",
  storageBucket: "rad-threads.appspot.com",
  messagingSenderId: "432770354858",
  appId: "1:432770354858:web:7df4fe1cf84aafb4204ad3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);