const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send(`
   
     <h1>Express Separate Routes Example</h1>
    <p>Navigate to different sections:</p>
    <ul>
      <li><a href="/users">Users</a></li>
      <li><a href="/products">Products</a></li>
    </ul>
  `);
});

module.exports = router;