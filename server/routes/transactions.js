const express = require("express");
const router = express.Router();
const { db } = require("../firebase/firebaseConfig");
const { fetchTRANSACTIONSData } = require("../models/TRANSACTIONS"); 

router.get("/", async (req, res) => {
    try {
        const transactions = await fetchTRANSACTIONSData();
        console.log(transactions);
        res.status(200).json(transactions);
    } catch (error) {
        console.error("Error getting documents", error);
        res.status(500).json({ error: "Failed to fetch transactions" });
    }
});

module.exports = router;
