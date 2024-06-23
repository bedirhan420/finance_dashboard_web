const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const kpiRoutes = require("./routes/kpi.js");
const productsRoutes = require("./routes/products.js");
const transactionsRoutes = require("./routes/transactions.js");

/* MIDDLEWARE */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

/* ROUTES */
app.use("/kpis",kpiRoutes)
app.use("/products",productsRoutes)
app.use("/transactions",transactionsRoutes)

app.get("/",(req,res)=>{
  try {
    res.status(200).json({"kpis":"/kpis","products":"/products","transactions":"/transactions"})
  } catch (error) {
    res.status(404).json({"msg : ":"Page not found"})
  }
})

