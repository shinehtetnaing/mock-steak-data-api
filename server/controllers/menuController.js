const steakModel = require("../models/steakModel");
const dessertModel = require("../models/dessertModel");
const mongoose = require("mongoose");

// get all menu
const getAllMenu = async (req, res) => {
    const steaks = await steakModel.find({})
    const desserts = await dessertModel.find({})
    const mergedArr = steaks.concat(desserts)
    const mergedJson = JSON.stringify(mergedArr)
    res.status(200).json(mergedJson);
}

// get a single menu
const getSingleMenu = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such menu"})
    }
    const steak = await steakModel.findById(id);
    if (!steak) {
        // return res.status(404).json({ error: "No such steak"})
        const dessert = await dessertModel.findById(id);
        res.status(200).json(dessert);
    } else {
        res.status(200).json(steak);
    }
}

module.exports = {
    getAllMenu,
    getSingleMenu
}