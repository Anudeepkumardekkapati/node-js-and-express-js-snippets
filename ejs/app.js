const express=require('express')
const app=express();



app.set('view engine','ejs')

// app.get('/',(req,res)=>{
//     res.render('home')
// })

// app.get('/',(req,res)=>{
//     const student ={
//         name:"anudeep",
//         age:18
//     };

//loops

app.get('/',(req,res)=>{
    const objs=['anudee','sandeep','kumar']
    res.render('home',{objs})

})




app.listen(7007,()=>{
    console.log(`{7007}`)
})