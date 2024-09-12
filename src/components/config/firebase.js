import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAUD7jiiPHSU1ivyx2ba1iILCMJIxDzDic",
    authDomain: "rent-a-car-875bc.firebaseapp.com",
    projectId: "rent-a-car-875bc",
    storageBucket: "rent-a-car-875bc.appspot.com",
    messagingSenderId: "746986985875",
    appId: "1:746986985875:web:92aee2492cde4029093066",
    measurementId: "G-J0NKREGDEY"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);