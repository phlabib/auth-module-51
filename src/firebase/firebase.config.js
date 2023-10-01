
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3RtaR8aw6lEAHJQliC7Xh2tLfbgmnRak",
  authDomain: "auth-module-51-c6579.firebaseapp.com",
  projectId: "auth-module-51-c6579",
  storageBucket: "auth-module-51-c6579.appspot.com",
  messagingSenderId: "631923405334",
  appId: "1:631923405334:web:c56293315c62b8b85c3b37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;