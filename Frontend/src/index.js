import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJiKXT3WHjUBvmkekIkIa2P9EA0mW-jco",
  authDomain: "node-fullstack-blog-post.firebaseapp.com",
  projectId: "node-fullstack-blog-post",
  storageBucket: "node-fullstack-blog-post.appspot.com",
  messagingSenderId: "34051921823",
  appId: "1:34051921823:web:a692a1543bff3e0f4f8faa",
  measurementId: "G-QKN2DC3S4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
