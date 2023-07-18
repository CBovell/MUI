// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'dotenv/config'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOM,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGE,
  messagingSenderId: process.env.MESSAGE,
  appId: process.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)