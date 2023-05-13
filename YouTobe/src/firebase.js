import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyB1Eq69eMRn7lytboZGlfa4aeu61U6lHwE",
    authDomain: "youtobe-clone-bysamandar.firebaseapp.com",
    projectId: "youtobe-clone-bysamandar",
    storageBucket: "youtobe-clone-bysamandar.appspot.com",
    messagingSenderId: "603741600993",
    appId: "1:603741600993:web:79305e46563798e3e90ba0",
    measurementId: "G-J7FVEHWGX8"
});

const auth = app.auth();
export { auth };
export default app;