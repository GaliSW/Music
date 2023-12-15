import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMMOZHz_EBfpYECf0oI9Bh4xc5xbgDmoY",
    authDomain: "music-ga8524.firebaseapp.com",
    projectId: "music-ga8524",
    storageBucket: "music-ga8524.appspot.com",
    appId: "1:40393918421:web:0c55d2c6004ff0a280df5c",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const userCollection = db.collection("users");

export { auth, db, userCollection };
