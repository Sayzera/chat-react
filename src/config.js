

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5T8NbbYBzFgTPqZBHCm6lFYsuK8rko3o",
  authDomain: "didem-1fb9b.firebaseapp.com",
  projectId: "didem-1fb9b",
  storageBucket: "didem-1fb9b.appspot.com",
  messagingSenderId: "752099163468",
  appId: "1:752099163468:web:6f88c8484bea52347b23e9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};
