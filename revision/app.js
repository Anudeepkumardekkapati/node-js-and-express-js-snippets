const express=require('express')



const app=express();

app.get('/',(req,res)=>{
    res.send("getting")
})




app.listen(9009,()=>{
    console.log("succes");
})