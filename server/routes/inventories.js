const express = require("express");
const router = express.Router();
const fs = require("fs");

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
router
    .get('/', (req,res) => {
        let inventory = fs.readFileSync('./data/inventories.json');
        inventory = JSON.parse(inventory);
        if (!inventory) return res.status(404).send('There was an error reading inventory data')
        
        return res.json(inventory)
    })
    .get('/:inventoryId', (req,res) => {
        let inventory = fs.readFileSync('./data/inventories.json');
        inventory = JSON.parse(inventory);
        if (!inventory) return res.status(404).send(`There was an error reading inventory data`)

        let selectedItem = inventory.find(item => item.id === req.params.inventoryId)
        res.json(selectedItem);
    })

    router.route("/add")
    .post((req, res) => {
        let inventories = fs.readFileSync('./data/inventories.json');
        inventories = JSON.parse(inventories);
        console.log(inventories);
    
        const newInvItem = {
            id: req.body.id,
            warehouseID: req.body.warehouseID,
            warehouseName: req.body.warehouseName,
            itemName: req.body.itemName,
            description: req.body.description,
            category: req.body.category,
            status: req.body.status,
            quantity: req.body.quantity
        }
        console.log(newInvItem);
    
        inventories.push(newInvItem);
        fs.writeFileSync('./data/inventories.json', JSON.stringify(inventories));
    
        res.status(201).json(newInvItem);
    })



module.exports = router;
