const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const steakSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: URL,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("steakModel", steakSchema);