import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBc481FrmwfaU5YabpSMY_9qmJ5z_Y-x00",
  authDomain: "authentication-bfe9a.firebaseapp.com",
  projectId: "authentication-bfe9a",
  storageBucket: "authentication-bfe9a.appspot.com",
  messagingSenderId: "302180752316",
  appId: "1:302180752316:web:da2a905dd4fc093a34a9b9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 