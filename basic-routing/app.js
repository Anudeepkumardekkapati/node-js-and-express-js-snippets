const express=require('express')
const app=express()



app.get('/',(req,res)=>{
    res.send("getting")
});
app.post('/post',(req,res)=>{
    res.send("posting")
});
app.delete('/del',(req,res)=>{
    res.send("deleting")
});
app.put('/put',(req,res)=>{
    res.send("putting")
});
app.use((req,res)=>{
    res.status(404).send("404-page not found")
});





app.listen(8009,()=>{
    console.log("port succes :{8009}")
})