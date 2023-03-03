const dessertModel = require("../models/dessertModel");
const mongoose = require("mongoose");

// get all desserts
const getDesserts = async (req, res) => {
    const desserts = await dessertModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(desserts);
}

// get a single dessert
const getDessert = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such dessert"})
    }
    const dessert = await dessertModel.findById(id);
    if (!dessert) {
        return res.status(404).json({ error: "No such dessert"})
    }
    res.status(200).json(dessert);
}

// create a new dessert
const createDessert = async (req, res) => {
    const { name, description, image, price } = req.body;
    try {
        const dessert = await dessertModel.create({ name, description, image, price })
        res.status(200).json(dessert);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getDesserts,
    getDessert,
    createDessert
}