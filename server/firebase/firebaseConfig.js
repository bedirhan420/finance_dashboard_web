const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBw_Cdv0uTgxorNG2soxXSsoL_yKx0MOpk",
  authDomain: "finance-app-df41d.firebaseapp.com",
  projectId: "finance-app-df41d",
  storageBucket: "finance-app-df41d.appspot.com",
  messagingSenderId: "438256318468",
  appId: "1:438256318468:web:20bdbbc543453b4e255d51"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = { firebaseApp, db };







