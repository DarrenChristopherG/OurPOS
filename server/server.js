// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // this allows cross-origin requests
app.use(express.json()); // this allows parsing of JSON

// Connect to MongoDB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Simple test route
app.get('/api/test', (req, res) => {
    res.json({message: 'Hello from your Express server!'});
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});