const router= require("express").Router()

// array as database
const Author = [];


router.get("/", (req, res) => {
    console.log(Author);
    
    res.json("Welcome to author's page");
})

router.post("/", async (req, res) => {

    const newAuthor = await req.body;

    // console.log(newBook);
    Author.push(newAuthor);
    console.log(Author);
    res.json("Saving a new author");
})

// path parameter use :id for instance 
// query parameter end of url 
// url encoding ?key=value for space use %20 keeping representation
router.get("/:booksId", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.json("Welcome, I am");
})

// router.get("/:booksId/authors/:authorId", (req, res) => {
//     console.log(req.params);
//     res.json("Welcome to this author");
// })


module.exports = router;