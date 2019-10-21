// import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOjIAv8REY6yggIInlWjh6fyoGNMywFUo",
    authDomain: "veles-home.firebaseapp.com",
    databaseURL: "https://veles-home.firebaseio.com"
});

// const base = Rebase.createClass(firebaseApp.database());
const base = firebase.database();

// This is a named export
export { firebaseApp };

// this is a default export
export default base;