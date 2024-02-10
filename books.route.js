const router= require("express").Router()

// array as database
const Book = [];


router.get("/", (req, res) => {
    console.log(Book);
    
    res.json("Welcome to books");
})

router.post("/", async (req, res) => {

    const newBook = await req.body;

    // console.log(newBook);
    Book.push(newBook);
    console.log(Book);
    res.json("Saving a new book");
})

// path parameter use :id for instance 
// query parameter end of url 
// url encoding ?key=value for space use %20 keeping representation
router.get("/:booksId", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.json("Welcome to this book");
})

router.get("/:booksId/authors/:authorId", (req, res) => {
    console.log(req.params);
    res.json("Welcome to this author");
})


module.exports = router;