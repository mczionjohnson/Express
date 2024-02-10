const express = require("express");
const app = express();

// middleware
// express has a body parser to pull out body from the payload
app.use(express.json());

app.use("/books", require("./books.route"))
app.use("/authors", require("./authors.route"))


app.get("/", (req, res) => {
    res.json("Welcome Reader")
})


app.listen(3000, () => {
    console.log("server is running")
})