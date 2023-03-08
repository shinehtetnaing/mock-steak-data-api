const express = require("express");
const {
    getAllMenu,
    getSingleMenu,
} = require("../controllers/menuController");

const router = express.Router();

// get all steaks
// router.get("/", getAllMenu)

// get a single steak
router.get("/:id", getSingleMenu)

module.exports = router;