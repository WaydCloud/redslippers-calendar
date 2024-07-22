// src/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmvBTyn23fFAy-b5JXI-LV0qqrOI68AoI",
    authDomain: "redslippers-entertainment.firebaseapp.com",
    projectId: "redslippers-entertainment",
    storageBucket: "redslippers-entertainment.appspot.com",
    messagingSenderId: "212971271547",
    appId: "1:212971271547:web:fccf4d55b76de3954eb9de",
    measurementId: "G-8NKDQX35CS"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
