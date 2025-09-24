// server/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // this allows cross-origin requests
app.use(express.json()); // this allows parsing of JSON

// Database
const db = require("./models");
db.sequelize.sync(); // This one spawns the tables if there are none yet

// Simple test route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the POS application." });
});

// Place for importing and using route
require("./routes/notes.routes.js")(app);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});