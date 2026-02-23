const express=require('express')
const app=express();


app.use((req,res,next)=>{
    console.log("first middile ware")
    next()
})
app.use((req,res,next)=>{
    console.log("second middile ware")
})





app.get('/',(req,res)=>{
    res.send("getting")
    
})


app.listen('5005',()=>{
    console.log(`{5005}`)
})