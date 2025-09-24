const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Import models
db.notes = require("./note.model.js")(sequelize, DataTypes);
//You can add other models here, like db.products = require(...)

module.exports = db;