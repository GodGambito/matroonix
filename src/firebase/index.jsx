// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// const firebaseConfig = {

//     apiKey: "AIzaSyAk0LRZd_DnuA2gSOqrHoK1shfhcqXAh2M",

//     authDomain: "matroonix-2111b.firebaseapp.com",

//     projectId: "matroonix-2111b",

//     storageBucket: "matroonix-2111b.appspot.com",

//     messagingSenderId: "857264002266",

//     appId: "1:857264002266:web:2d19c66f26a6c46f5341e3"

// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
