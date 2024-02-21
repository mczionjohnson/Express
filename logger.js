// req res next 
const logger = (req, res, next) => {
console.log(
    "logger is active", 
    {
    "URL" : req.url, 
    "methods" : req.method,
    "Time" : new Date(),
    "body": req.body,
    "params": req.params, 
    "query": req.query
});

next();
}


module.exports = logger