const express=require('express')
const path=require('path')

const app=express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{

    res.send(`
         <h1>anudeep</h1>
         <img src= "/servingstatic-files"`)
})







app.listen(5005,()=>{
    console.log(`{5005}`)
})