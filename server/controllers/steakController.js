const steakModel = require("../models/steakModel");
const mongoose = require("mongoose");

// get all steaks
const getSteaks = async (req, res) => {
    const steaks = await steakModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(steaks);
}

// get a single steak
const getSteak = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such steak"})
    }
    const steak = await steakModel.findById(id);
    if (!steak) {
        return res.status(404).json({ error: "No such steak"})
    }
    res.status(200).json(steak);
}

// create a new steak
const createSteak = async (req, res) => {
    const { name, description, image, price } = req.body;
    try {
        const steak = await steakModel.create({ name, description, image, price })
        res.status(200).json(steak);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getSteaks,
    getSteak,
    createSteak
}