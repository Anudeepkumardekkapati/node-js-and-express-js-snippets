const express = require('express');
const home = require('./routed/homerouter');
const about=require('./routed/aboutrouter');

const app = express();

app.use(home);
app.use(about)

app.listen(7070, () => {
    console.log("Server running on port 7070");
});