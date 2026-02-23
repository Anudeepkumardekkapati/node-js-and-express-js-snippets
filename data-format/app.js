const express = require('express');
const app = express();


app.get("/", (req, res) => {
    const date1 = new Date();
    let day = date1.getDay();
    let month = date1.getMonth() + 1;
    let year = date1.getFullYear();
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    const formatdate = `${day}-${month}-${year}`;
    res.json({
        date: formatdate
    });

});





app.listen(3001, () => {
    console.log("running");
})