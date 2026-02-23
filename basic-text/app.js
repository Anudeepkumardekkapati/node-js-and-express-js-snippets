const express= require('express')
const app=express();


app.get('/',(req,res)=>{
    res.send("something");
})





app.listen(8008,()=>{
    console.log("port success")
})