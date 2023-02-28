require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const steakRoutes = require("./routes/steak");

const app = express();

app.use(express.json());

// routes
app.use("/api/steak", steakRoutes);

// connect to db
mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        // start the Express server
        app.listen(process.env.PORT, () => {
            console.log("Connected to db and Server is running on port: ", process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });

// middleware
app.use(( req, res, next) => {
    console.log(req.path, req.method)
    next()
});

module.exports = app;