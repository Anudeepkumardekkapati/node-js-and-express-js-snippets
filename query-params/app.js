const express=require('express')

const app=express()



app.get('/search',(req,res)=>{
    res.send(`q:${req.query.q},catogory:${req.query.catogory}`)
})





app.listen(8000,()=>{
    console.log(`${8080}`)
})