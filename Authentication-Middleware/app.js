const express=require('express')

const app=express()


function authenticate(req,res,next){
    const header=req.headers.authorization;
    if (!header){
        return res.status(403).json("something error")

    }
    const token=header.split(' ')[1];

    if (token == "secret-key"){
        req.user={
            id:11,
            name:"anudep"
        }
        next();
    }
    else{
        return res.status(403).json({message:"not diifine reiased error"})
    }
}
app.get('/',(req,res)=>{
    console.log("something comoon")

})
app.get('/authenticate',authenticate,(req,res)=>{
    res.json({message:"protected data",user:req.user})

});









app.listen(2001,()=>{
    console.log(`port:{2001}`)
})