import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzMltWCMgEU9c9I_fn-YQCzRiwSWuusGU",
  authDomain: "e-commerce-cafe-c5d62.firebaseapp.com",
  projectId: "e-commerce-cafe-c5d62",
  storageBucket: "e-commerce-cafe-c5d62.appspot.com",
  messagingSenderId: "879552331729",
  appId: "1:879552331729:web:539028aaa09e6d8c0b2af0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


