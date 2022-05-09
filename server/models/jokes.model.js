const mongoose = require("mongoose");

//MODELS
//-----------------------------------------------------------------------------------------------
//Model Joke
const SchemaJoke = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline:{
        type:String,
        minlength: [3, "Punchline must be at least 3 characters long"]
    }
}, { timestamps: true, versionKey:false });

//Creating Object Joke in document: Jokes through SchemaJoke
const Joke = mongoose.model("jokes", SchemaJoke);
//Exporting Object Joke
module.exports = Joke;