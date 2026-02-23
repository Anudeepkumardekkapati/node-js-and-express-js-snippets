const express=require('express')


const app=express()

app.get('/users/:userid/book/:bookid',(req,res)=>{
    res.send(`userid:${req.params.userid}, book:${req.params.bookid}`)
});








app.listen(8080,()=>{
    console.log("port:{8009}")
})