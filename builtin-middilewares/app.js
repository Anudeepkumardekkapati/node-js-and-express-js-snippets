const express = require('express');

const app = express();


app.use(express.json())


app.use(express.urlencoded({extended:true}));


app.use(express.static('public'))


app.post('/post',(req,res)=>{
    console.log(req.body)
    res.status(205).json({message:'usercreated',
        user:req.body
    })
})



app.listen(3002, () => {
    console.log("running");
})