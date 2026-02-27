const express=require('express')
const morgan=require('morgan')
const helmet=require('helmet')
const cors= require('cors')
const compression=require('compression')
const cookieParser = require('cookie-parser')
const cookieparser=require('cookie-parser')
const app=express()


// app.use(morgan('anudeep'))
// app.use(helmet())
// app.use(cors())
// app.use(compression())
// app.get('/',(req,res)=>{
//     res.json({message:"cors use ful for origin "})
// })

app.use(cookieparser())
app.get('/set',(req,res)=>{
    res.cookie('username','anudeep')
    res.send("cookie set")
})
app.get('/get', (req, res) => {
  res.send(req.cookies); // Large response
});




app.listen(2002,()=>{
    console.log(`port:{2002}`)
})