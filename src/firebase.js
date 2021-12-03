import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBKvju84o6TvRSEki7U_QnHJs4dvk8NCi0",
  authDomain: "ftccsocial-688a3.firebaseapp.com",
  projectId: "ftccsocial-688a3",
  storageBucket: "ftccsocial-688a3.appspot.com",
  messagingSenderId: "480128602095",
  appId: "1:480128602095:web:fe1f5a4a00dd806d94f01a",
  measurementId: "G-TWDPF14Z0Q",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
