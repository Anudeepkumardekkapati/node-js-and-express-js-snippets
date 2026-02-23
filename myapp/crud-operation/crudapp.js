const express = require("express");
const userroutes = require("./routes/userroutes");
const app = express();
app.use(express.json())
app.use("/", userroutes);
app.listen(3003, () => {
    console.log("running in port 3000");
});