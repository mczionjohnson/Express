const router= require("express").Router()


// auth middleware will affect all book routes here
// const auth = require(./auth.js)

router.use((req, res, next) => {

    // console.log(req.headers["authetication"]);
    console.log(req.headers.authetication);
    next();
})

// array as database
const Book = [];


router.get("/", (req, res) => {
    console.log(
        {
        "Books available": Book
        });
    
    res.json("Welcome to books");
})

// still cooking PATCH, PUT, DELETE methods
router.put("/", async (req, res) => {

    // const newBook = await req.body;

    // console.log(newBook);
    // Book.push(newBook);
    // console.log(Book);
    res.json("editing the full detail of a book");
})

router.patch("/", (req, res) => {
    // console.log(
    //     {
    //     "Books available": Book
    //     });
    
    res.json("editing a part of a book");
})

router.delete("/", (req, res) => {
    // console.log(
    //     {
    //     "Books available": Book
    //     });
    
    res.json("deleting a books");
})

// path parameter use :id for instance 
// query parameter end of url 
// url encoding ?key=value for space use %20 keeping representation
router.get("/:booksId", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.json("Getting a specific book");
})

router.get("/:booksId/authors/:authorId", (req, res) => {
    console.log(req.params);
    res.json("Getting a specific book by author Id");
})


module.exports = router;