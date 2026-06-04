//five step server Formular.
//1.Import libraries
const express = require('express');
const mongoose=require('mongoose');
const cors=require('cors');
//2.Create an instance of Server
const app=express();
const PORT=3000;
//3.Middleware configuration
app.use(express.json());
app.use(cors());          //Security gate keeper for cross-origin requests

//4.Routes Endpoints
app.get('/status',(req,res)=>{
    res.send('Server is running');
});
//5.Port Listening
app.listen(PORT,()=>{
    console.log('Server is running on port: ', PORT);
});
