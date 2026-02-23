const express = require('express');
app = express();
app.get("/", (req, res) => {
    res.send("express js ");
})

module.exports = app;