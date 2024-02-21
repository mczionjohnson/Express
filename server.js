const express = require("express");
const app = express();
const logger = require("./logger")

// middleware
// express has a body parser to pull out body from the payload
app.use(express.json());

// global middleware
app.use(logger);

// to load static files e.g CSS, Imgs etc
app.use(express.static("public"));


app.use("/books", require("./books.route"))
app.use("/authors", require("./authors.route"))

// initial view
// app.get("/", (req, res) => {
//     res.json("Welcome Reader")
// })

// design the 404 status for the rest of the route
// make it the last on the server
app.all("*", (req, res) => {
    // res.status(404).send("Page not found");
    // json prettier
    res.status(404).jsonp({message: "Page not found"});
})

app.listen(3000, () => {
    console.log("server is running")
})