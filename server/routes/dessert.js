const express = require("express");
const {
    getDesserts,
    getDessert,
    createDessert,
} = require("../controllers/dessertController");

const router = express.Router();

// get all desserts
router.get("/", getDesserts)

// get a single dessert
router.get("/:id", getDessert)

// post a new dessert
router.post("/", createDessert)

router.patch("/:id", (req, res) => {
    res.json({msg: "Update a menu"})
})

router.delete("/:id", (req, res) => {
    res.json({msg: "Delete a menu"})
})

module.exports = router;