const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/apijokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Successful connection to the database"))
    .catch(error => console.log("Something went wrong when connecting to the database"+error));