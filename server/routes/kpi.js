const express = require("express");
const router = express.Router();
const { db } = require("../firebase/firebaseConfig");
const { fetchKPIData } = require("../models/KPI"); // Import fetchKPIData function

router.get("/", async (req, res) => {
    try {
        const kpis = await fetchKPIData(); // Call fetchKPIData function
        console.log(kpis);
        res.status(200).json(kpis);
    } catch (error) {
        console.error("Error getting documents", error);
        res.status(500).json({ error: "Failed to fetch KPIs" });
    }
});

module.exports = router;
