const express= require('express')
const morgan=require('morgan')
const cors=require('cors')
const compresion=require('compression')
const helmet = require('helmet');
const cookieParser = require('cookie-parser');


const app=express()
app.use(helmet())
app.use(morgan('anudeep'))
app.use(cors())
app.use(compresion())
app.use(cookieParser())

app.use(express.json())


const student={
    username:"anudeep",
    id:1,
    attendance:"85%",
    backlogs:0
};
app.post('/login',(req,res)=>{
    const {username}=req.body;
    if (username =="anudeep"){
        res.cookie("studentauth","true");
        return res.json({message:"login-succesfully"});
    return res.status(401).json({message:"invalid user"});


    }

})
app.get('/dash',(req,res)=>{
    if (req.cookies.studentauth == "true"){
        return res.send(student)
    return res.status(403).json({message:"not auhterization"})
    }
})
app.get('/attedance',(req,res)=>{
    if (req.cookies.studentauth=="true"){
        return res.send(student.attendance)
    return res.status(403).json({message:"login required"})

    }
})
app.get('/logout',(req,res)=>{
    if(req.cookies.studentauth=="true"){
        res.clearCookie('studentauth');
        res.json({message:"logout successfully"})
    }
})

app.listen(2001,()=>{
    console.log(`port:{2001}`)
})