const express = require("express");
const router = express.Router();
const { db } = require("../firebase/firebaseConfig");
const {  fetchPRODUCTSData } = require("../models/PRODUCTS"); 

router.get("/", async (req, res) => {
    try {
        const products = await  fetchPRODUCTSData();
        console.log(products);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error getting documents", error);
        res.status(500).json({ error: "Failed to fetch PRODUCTs" });
    }
});

module.exports = router;
