const express= require('express')



const app=express();





app.get('/',(req,res,next)=>{
    res.send("checking")
    console.log("date:",new Date().toISOString());
    console.log("method:",req.method());
    console.log("url:",req.url())
    
})


app.listen(6060,()=>{
    console.log(`{6060}`)
})