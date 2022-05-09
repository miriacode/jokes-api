const JokesController = require("../controllers/jokes.controller");

//ROUTES
//--------------------------------------------------------------------

module.exports = app => {
    app.get("/api/jokes/", JokesController.findAllJokes);
    app.get("/api/jokes/random", JokesController.findRandomJoke);
    app.get("/api/jokes/:id", JokesController.findOneJoke);
    app.post("/api/jokes/new", JokesController.createJoke);
    app.put("/api/jokes/update/:id", JokesController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
}