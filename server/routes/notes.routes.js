module.exports = app => {
    const notes = require("../controllers/note.controller.js"); //Controller is coming up
    var router = require("express").Router();

    //Create a new Note
    router.post("/", notes.create);

    //Retrieve all Notes
    router.get("/", notes.findAll);

    //We would add routes for retrieving a single note, updating, and deleting here)

    app.use('api/notes', router);
};