import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDyIau-Uv053gJh3NHrWbrwn4EluhtgdFs",
  authDomain: "emilio-pernicone.firebaseapp.com",
  projectId: "emilio-pernicone",
  storageBucket: "emilio-pernicone.appspot.com",
  messagingSenderId: "304138639364",
  appId: "1:304138639364:web:509976b4d91976e0883d51"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
