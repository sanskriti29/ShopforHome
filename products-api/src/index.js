// This file is the entry point to our nodejs application
const express = require("express");
const productRouter = require ("./routers/products");
require('./db/mongoose');

const app = express();

app.use(express.json());

app.use(productRouter);

app.listen(3000,()=>{
    console.log('app is running on the port 3000');
})