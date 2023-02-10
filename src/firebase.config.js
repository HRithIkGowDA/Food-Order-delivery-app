import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgjK1tNl4obWmU_5NeIru_G8n71yAi-Zs",
  authDomain: "food-ordering-app-ca009.firebaseapp.com",
  databaseURL: "https://food-ordering-app-ca009-default-rtdb.firebaseio.com",
  projectId: "food-ordering-app-ca009",
  storageBucket: "food-ordering-app-ca009.appspot.com",
  messagingSenderId: "829785965170",
  appId: "1:829785965170:web:5be9ca5fb6f2e44bd6f8eb",
  //measurementId: "G-9VDFL9M7ZW"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
