import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// import { getFirestore } from "firebase/firestore"; // Example if you use Firestore
// import { getStorage } from "firebase/storage"; // Example if you use Storage

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpafF16Ab8M2AX2JzF4W38i7INKOEjcxU",
  authDomain: "penny-ea6f0.firebaseapp.com",
  projectId: "penny-ea6f0",
  storageBucket: "penny-ea6f0.firebasestorage.app",
  messagingSenderId: "555372428319",
  appId: "1:555372428319:web:1f03bb064841a7fcf5692a",
  measurementId: "G-E5WV0588SW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
// Ensure account chooser is shown every time and profile data (incl. photo) is available
googleProvider.setCustomParameters({ prompt: "select_account" })
googleProvider.addScope("profile")
googleProvider.addScope("email")
// const db = getFirestore(app); // Example
// const storage = getStorage(app); // Example

export { app, auth, googleProvider /*, db, storage */ }
