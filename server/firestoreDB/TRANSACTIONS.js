const { transactions } = require("../data/data");
const { firebaseApp, db } = require("../firebase/firebaseConfig");
const { doc, setDoc } = require("firebase/firestore");

const transactionsDocumentRef = doc(db, 'transactions', 'transactions');

const addDataToFirestore = async () => {
    try {
        await setDoc(transactionsDocumentRef, { transactions });
        console.log("Transactions successfully added to Firestore!");
    } catch (error) {
        console.error("Error adding transactions to Firestore:", error);
    }
};

addDataToFirestore();
