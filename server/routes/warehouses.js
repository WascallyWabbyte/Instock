const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// Middleware
router.use(express.json());

// Config
require("dotenv").config();
port = process.env.port;

/***********************
 * ADD NEW METHODS BELOW
 ***********************/
// router
//     .get()
//     .post()
//     etc
router.route("/")
      .get((req, res) => {
          let allWhArr = fs.readFileSync('./data/warehouses.json');
          allWhArr = JSON.parse(allWhArr);
          return res.json(allWhArr);
      })
      .post((req, res) => {
        const {name, address, city, country, contact} = req.body;
        let warehouses = fs.readFileSync('./data/warehouses.json');
        warehouses = JSON.parse(warehouses);
        let newWarehouse = {
          id: uuidv4(),
          name,
          address,
          city,
          country,
          contact
        }
        warehouses.push(newWarehouse);
        res.json(newWarehouse.id)

        fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouses))
      })

router.get("/:warehouseId", (req, res) => {
  let warehouses = fs.readFileSync("./data/warehouses.json");
  warehouses = JSON.parse(warehouses);

  let inventories = fs.readFileSync("./data/inventories.json");
  inventories = JSON.parse(inventories);

  const warehouse = warehouses.find(
    (warehouse) => warehouse.id === req.params.warehouseId
  );

  const inventory = inventories.find(
    (inventory) => inventory.warehouseID === req.params.warehouseId
  );

  if (!warehouse) {
    return res
      .status(404)
      .json({ errorMessage: `Warehouse ${req.params.warehouseId} not found` });
  }

  return res.json(warehouse);
});

router.put('/:warehouseId', (req,res) => {
  let warehouses = fs.readFileSync("./data/warehouses.json");
  warehouses = JSON.parse(warehouses);

  let selectedWarehouse = warehouses.find(warehouse => warehouse.id === req.body.id)
  let selectedIndex = warehouses.indexOf(selectedWarehouse);
  let updatedWarehouse = req.body;

  warehouses[selectedIndex] = updatedWarehouse;
  res.json(updatedWarehouse)

  fs.writeFileSync('./data/warehouses.json', JSON.stringify(warehouses))
})

// router.route("/:warehouseId/delete", (req, res) => {
//   let warehouses = fs.readFileSync("./data/warehouses.json");
//   warehouses = JSON.parse(warehouses);

//   if (!warehouse) {
//     return res
//       .status(404)
//       .json({ errorMessage: `Warehouse ${req.params.warehouseId} not found` });
//   }

//   remainingwarehouses = warehouses.filter(warehouse => warehouse.id !== req.params.warehouseId);

//   fswriteFileSync('./data/items.json', JSON.stringify(remainingwarehouses));

//   return res.status(204).send();
// })

router.get("/:warehouseId/inventory", (req, res) => {
  let inventories = fs.readFileSync("./data/inventories.json");
  inventories = JSON.parse(inventories);

  const inventory = inventories.filter(
    (inventory) => inventory.warehouseID === req.params.warehouseId
  );

  if (!inventory) {
    return res.status(404).json({
      errorMessage: `Inventory for ${req.params.warehouseName} not found`,
    });
  }
  return res.json(inventory);
});
module.exports = router;
