const { doc, getDoc } = require("firebase/firestore");
const { db } = require("../firebase/firebaseConfig");

const TRANSACTIONS= {
    _id: "",
    amount: 0,
    buyer: "",
    productIds: [],
};

async function fetchTRANSACTIONSData() {
  const docRef = doc(db, "transactions", "transactions");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const firestoreData = docSnap.data();

    console.log("TRANSACTIONS = ",firestoreData.transactions)
    const firestoreTRANSACTIONS = firestoreData.transactions.map(transactionData => ({
      id: transactionData._id || TRANSACTIONS._id,
      amount: transactionData.amount || TRANSACTIONS.amount,
      buyer: transactionData.buyer || TRANSACTIONS.buyer,
      productionsId: transactionData.productIds || TRANSACTIONS.productIds,
    }));

    console.log("Firestore TRANSACTIONS data:", firestoreTRANSACTIONS);
    return firestoreTRANSACTIONS;
  } else {
    console.log("No such document!");
    return null;
  }
}

module.exports = {
  fetchTRANSACTIONSData,
};
