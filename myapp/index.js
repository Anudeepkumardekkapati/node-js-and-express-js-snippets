const express = require("express");
const app = express()

app.get('/', (req, res) => {
    res.send("hello world");
    console.log(req);
});


app.get("/date", (req, res) => {
    const date = new Date();
    console.log(`date is ${ date }`);

});

app.get("/page", (req, res) => {
    res.sendFile('./page.html', { root: __dirname });

});
app.listen(3001, () => {
    console.log("server running");


});