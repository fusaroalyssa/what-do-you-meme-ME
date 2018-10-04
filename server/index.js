const math = require('./math');
const express = require('express');



//console.log("2 + 2 = " + something);

const app = express();

app.get("/add", function(req, res)
{
    var something = math.add(2, 2);
    res.send({something: something});
})

app.use("/", function(req, res, next)
{
    res.send("hello world");
});

app.listen(3000);