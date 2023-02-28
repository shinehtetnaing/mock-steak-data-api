const express = require("express");
const {
    getSteaks,
    getSteak,
    createSteak,
} = require("../controllers/steakController");

const router = express.Router();

// get all steaks
router.get("/", getSteaks)

// get a single steak
router.get("/:id", getSteak)

// post a new steak
router.post("/", createSteak)

router.patch("/:id", (req, res) => {
    res.json({msg: "Update a menu"})
})

router.delete("/:id", (req, res) => {
    res.json({msg: "Delete a menu"})
})

module.exports = router;