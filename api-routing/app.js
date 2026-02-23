const express = require('express');

const app = express();


app.get("/", (req, res) => {
    res.send("hi anudeep");

})
app.get("/update", (req, res) => {
    res.send("hi shammu");

})




app.listen(3001, () => {
    console.log("running");
})