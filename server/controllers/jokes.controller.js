//Importing model Joke
const Joke = require("../models/jokes.model"); 

//CONTROLLERS
//----------------------------------------------------------------------------------------------
//READ ALL - joke
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(error => res.json({message: "There was a mistake "+ error}));
};

//READ ONE - joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(joke => res.json({joke: joke}))
        .catch(error => res.json({message: "There was a mistake "+ error}));
}

//CREATE - joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body) 
        .then(joke => res.json({joke: joke}))
        .catch(error => res.json({message: "There was a mistake "+ error}));
}

//UPDATE - joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(joke => res.json({joke: joke}))
        .catch(error => res.json({message: "There was a mistake "+ error}));
}

//DELETE - joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(error => res.json({message: "There was a mistake "+ error}));
}

//READ ONE (RANDOM) - joke
module.exports.findRandomJoke = (req, res) => {
    Joke.aggregate([{ $sample: { size: 1 } }])
        .then(joke => res.json({joke: joke}))
        .catch(error => res.json({message: "There was a mistake "+ error}));
}