const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/products-api",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}) .then(() =>{
    console.log('connected to database');
}) .catch(error =>{
    console.log('unable to connect to database',error);
})