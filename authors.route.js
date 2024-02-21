const router= require("express").Router()

// array as database
// const Author = [];

router.use((req, res, next) => {

    // console.log(req.headers["authetication"]);
    console.log(req.headers.authetication);
    next();
})

router.get("/", (req, res) => {
    // console.log(Author);
    
    res.json("Welcome to author's page");
})

router.post("/", async (req, res) => {

    // const newAuthor = await req.body;

    // console.log(newBook);
    // Author.push(newAuthor);
    // console.log(Author);
    res.json("creating an author");
})

// still cooking PATCH, PUT, DELETE methods
router.patch("/", async (req, res) => {

    // let authorId = req.body.id
    // // const newAuthor = await Author.find(authorId) => {
    //     // if authorId = 
    // }

    // // console.log(newBook);
    // Author.push(newAuthor);
    // console.log(Author);
    res.json("editing a/some field(s) of an existing author");
})

router.put("/", async (req, res) => {

    res.json("editing the full detail of an author");
})
/
router.delete("/", async (req, res) => {

    // const newAuthor = await req.body;

    // console.log(newBook);
    // Author.push(newAuthor);
    // console.log(Author);
    res.json("deleting an author");
})


// still cooking GET by ID

// path parameter use :id for instance 
// query parameter end of url 
// url encoding ?key=value for space use %20 keeping representation

// router.get("/:booksId/authors/:authorId", (req, res) => {
//     console.log(req.params);
//     console.log(req.query);

//     res.json("getting a specific author by Id");
// })


module.exports = router;