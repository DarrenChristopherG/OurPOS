const db = require("../models"); //next step!!
const Note = db.notes;

// create and save a new Note
exports.create = async (req, res) => {
    //Validate request
    if (!req.body.title) {
        req.status(400).send({ message: "Title can not be empty" });
        return;
    }
    try {
        const note = await Note.create({ title: req.body.title, content: req.body.content });
        res.send(note);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while creating the Note."});
    }
};

//This retrieves all Notes from the database
exports.findAll = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.send(notes);
    } catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving notes"});
    }
};