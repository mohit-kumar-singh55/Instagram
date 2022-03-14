import { initializeApp, getApps, getApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyB3-9hD9qxy1C8tDIZA3F_cf4KLKSni7aA",
    authDomain: "insta-for-me-a9903.firebaseapp.com",
    projectId: "insta-for-me-a9903",
    storageBucket: "insta-for-me-a9903.appspot.com",
    messagingSenderId: "168826167230",
    appId: "1:168826167230:web:1808b73acd96c3599de3ef"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();