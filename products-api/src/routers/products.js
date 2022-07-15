const express = require("express");
const Product = require('../models/products');
const router = new express.Router();

router.get('/products',async(req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).send(products);
    } catch(error){
        res.status(500).send(error);
    }
})

module.exports = router;