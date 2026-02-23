const express=require('express')
const morgan=require('morgan')

const app=express();
app.use(morgan('dev'))




app.get('/',(req,res)=>{
    res.send("something")
})


app.listen(8080,()=>{
    console.log(`{8080}`)
})
