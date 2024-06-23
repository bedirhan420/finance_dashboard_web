const { products } = require("../data/data");
const { firebaseApp, db } = require("../firebase/firebaseConfig");
const { doc, setDoc } = require("firebase/firestore");

const productDocumentRef = doc(db, 'products', 'products');

const addDataToFirestore = async () => {
    try {
        await setDoc(productDocumentRef, { products });
        console.log("Products successfully added to Firestore!");
    } catch (error) {
        console.error("Error adding products to Firestore:", error);
    }
};

addDataToFirestore();
