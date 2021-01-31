const firebase = require("firebase");
const products = require("./products.json");
console.log(products);

const firebaseConfig = {
    apiKey: "AIzaSyAPxPo6yOvxc3FBSH4W5DbvwSozZz_qX4I",
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