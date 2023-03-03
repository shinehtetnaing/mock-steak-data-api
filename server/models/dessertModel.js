const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dessertSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("dessertModel", dessertSchema);