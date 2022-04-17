// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAEKPB3pbHpkC22Qw6tg4kViFyZ_rCjCE",
    authDomain: "independent-service-prov-9c01e.firebaseapp.com",
    projectId: "independent-service-prov-9c01e",
    storageBucket: "independent-service-prov-9c01e.appspot.com",
    messagingSenderId: "251808657660",
    appId: "1:251808657660:web:fa8f8d78685e072bb9e779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;