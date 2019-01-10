
const express = require('express');
const router = express.Router();

router.use('/add-product',(req, res)=>{
    console.log("Add a product");
    res.send('<form action="/product" method="POST"><input type="text" name="Product" title="product"/><button type="submit">Submit</button></form>');
});

router.use('/product',(req, res)=>{
    console.log(req.body);
    console.log("product");
    res.send('<h1>This is a Product Page</h1>');
});

module.exports = router;