const mongoose = require("mongoose");

//MODELS
//-----------------------------------------------------------------------------------------------
//Model Joke
const SchemaJoke = new mongoose.Schema({
    setup: String,
    punchline: String,
}, { timestamps: true, versionKey:false });

//Creating Object Joke in document: Jokes through SchemaJoke
const Joke = mongoose.model("jokes", SchemaJoke);
//Exporting Object Joke
module.exports = Joke;