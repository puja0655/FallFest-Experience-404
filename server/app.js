const app = require('express')()
const express = require('express');
const cors = require('cors')
const registerRouter = require('./routes/registerRouter');
const razorpayRouter = require('./routes/razorpayRouter');

const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;


const connect = mongoose.connect("mongodb+srv://admin:puja0039@cluster0.kot7j.mongodb.net/users?retryWrites=true&w=majority");  
app.use(express.static('public'));
connect.then((db)=>{
  console.log('connected correctly to the server');
},(err)=>{console.log(err);});


app.use(cors())



// Routers 
app.use('/razorpay',razorpayRouter);
app.use('/register',registerRouter);






 


app.get('/',(req,res)=>{
    res.json({hello:"hello"})
  })
  

  
 app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`)
  })
  
  
  module.exports = app;
   
