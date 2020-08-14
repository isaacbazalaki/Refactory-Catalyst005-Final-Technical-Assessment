const mongoose = require("mongoose");

var coronaSchema = new mongoose.Schema({
    surname: String,
    givenName: String,
    dateOfBirth: String,
    placeOfResidence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String,
    
});

module.exports= mongoose.model("Corona", coronaSchema)

