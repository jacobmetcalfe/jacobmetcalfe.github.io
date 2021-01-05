import firebase from "firebase/";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCL1O5QbteRVBpYuDw4g3D-D9mV1WDxHL8",
    authDomain: "portfolio-c43c6.firebaseapp.com",
    databaseURL: "https://portfolio-c43c6-default-rtdb.firebaseio.com",
    projectId: "portfolio-c43c6",
    storageBucket: "portfolio-c43c6.appspot.com",
    messagingSenderId: "979199506538",
    appId: "1:979199506538:web:05f4f0cca04f7fe82df213",
    measurementId: "G-BFJ76V4X6K"
});

var db = firebaseApp.firestore();

export { db };