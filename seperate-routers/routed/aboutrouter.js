const {Router}=require('express')
const router=Router();


router.get('/about',(req,res)=>{
      res.send(`
    <h2>Products List</h2>
    <ul>
      <li><a href="/products/1">Product 1</a></li>
      <li><a href="/products/2">Product 2</a></li>
      <li><a href="/products/3">Product 3</a></li>
    </ul>
  `);

})






module.exports=router;