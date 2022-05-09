const express = require("express");
const app = express();

//Initializing BD
require("./server/config/mongoose.config");

//To Use JSON and get URL data
app.use( express.json(), express.urlencoded({ extended: true }) );

//Importing routes
const misRutas = require("./server/routes/jokes.routes");

misRutas(app);

//Executing server
app.listen(8000, () => console.log("Server Ready!"));