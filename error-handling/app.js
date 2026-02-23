const express=require('express')
const app=express();

//default error handler
// app.get('/',(req,res)=>{
//     throw new Error("something went wrong");
//     res.status(500).json({
//         message:err.Message,
//         status:500


//     })
    
    
// })


//custome error handler middile ware

// app.get('/',(req,res)=>{
//     throw new Error("something went worng");
// })

// app.use((err,req,res,next)=>{
//     console.log("err");
//     res.status(500).json({message:"oops somehting wnt wrong"})
// })


//Synchronous Error Handling

// app.get('/',(req,res)=>{
//     throw new Error("something wring")
// })


//Handling Errors with next(err)


// app.get('/',(req,res,next,)=>{
//     const err=new Error("manually triggered")
//     next(err)
// })


//Asynchronous Error Handling
// app.get('/',async (req,res,next)=>{
//     try{
//         await Promise.reject(new Error("something asnchroniues aerror"))
//     }
//     catch(err){
//         next(err)
//     }

// })


app.get('/',(req,res)=>{
    throw new Error("something wnet worng")
})
app.get('/async',(req,res,next)=>{
    setTimeout(()=>{
    try{
        const result=nonExistentFunction()
        res.send(result)
    }
    catch(err){
        next(err)
    }

},100)
})

app.use((err,req,res,next)=>{
    res.status(500).json({message:err.message})
})
app.listen(5009,()=>{
    console.log('port:{5009}')
})


