require("dotenv").config({ path: `${__dirname}/../../.env` });
const firebase = require("firebase");
const products = require("./products.json");

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "summerstore-94f3d.firebaseapp.com",
    projectId: "summerstore-94f3d",
    storageBucket: "summerstore-94f3d.appspot.com",
    messagingSenderId: "471743182653",
    appId: "1:471743182653:web:0f88a65b035ed1d6627754",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

products.forEach((product) => {
   db.collection("products")
       .add({
           ...product,
       })
       .then((productSaved) => {
           console.log(`Product saved: ${productSaved.id}`);
       });
});