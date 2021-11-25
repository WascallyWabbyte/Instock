const express = require("express");
const cors = require("cors");
const app = express();
const warehouseRoutes = require("./routes/warehouses");
const inventoriesRoutes = require("./routes/inventories");
const inventories = require("./data/inventories.json");
const bp = require("body-parser");

// Middleware
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.static("public"));

// Config
require("dotenv").config();
const port = process.env.port || 8080;

/**************************************************
 * ADD NEW ENDPOINTS IN THE APPROPRIATE ROUTES FILE
 **************************************************/
app.use("/api/warehouses", warehouseRoutes);
app.use("/api/inventory", inventoriesRoutes);

app.get("/api/warehouses/:warehouseId", (req, res) => {
  res.json(warehouseId);
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
