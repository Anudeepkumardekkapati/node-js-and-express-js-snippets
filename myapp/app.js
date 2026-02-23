const express = require("express");
const { addDays, format } = require("date-fns");
const app = express();

app.get("/", (req, res) => {
    const date = new Date();
    const adddays = addDays(date, 100);
    const formatdate = format(adddays, "dd/MM/yyyy");
    res.send(formatdate);


});



app.listen(3002, () => {
    console.log("running the port at 3002");
});