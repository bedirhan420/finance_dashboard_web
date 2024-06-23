const { doc, getDoc } = require("firebase/firestore");
const { db } = require("../firebase/firebaseConfig");

const PRODUCTS = {
  _id: "",
  price: 0,
  expense: 0,
  transactions: [],
};

async function fetchPRODUCTSData() {
  const docRef = doc(db, "products", "products");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const firestoreData = docSnap.data();

    console.log("products = ",firestoreData.products)
    // Her bir ürünün verisini içeren bir dizi oluştur
    const firestorePRODUCTS = firestoreData.products.map(productData => ({
      id: productData._id || PRODUCTS._id,
      price: productData.price || PRODUCTS.price,
      expense: productData.expense || PRODUCTS.expense,
      transactions: productData.transactions || PRODUCTS.transactions,
    }));

    console.log("Firestore PRODUCTS data:", firestorePRODUCTS);
    return firestorePRODUCTS;
  } else {
    console.log("No such document!");
    return null;
  }
}

module.exports = {
  fetchPRODUCTSData,
};
