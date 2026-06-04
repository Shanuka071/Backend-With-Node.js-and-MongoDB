// create a new Server for To give flood alert
//According to the Server Formular.
//1.Import libraries
const mongoose=require('mongoose');
const express=require('express');
const cors=require('cors');

//2.Create an instance of Server
const app=express();
const PORT=4000;

//3.Global middleware configuration
app.use(express.json());
app.use(cors());

//4.Routes endpoints
const floodData=[{city:"Colombo",rainfall:100},{city:"Kandy",rainfall:200},{city:"Galle",rainfall:150}];

app.get('/weather/warnings/:city',(req,res)=>{
    const requestedCity=req.params.city;
    //filter the floodData array to find records that match the requested city and have rainfall greater than 150
    const alert=floodData.filter(record=>{
        //first condition
        const cityMatch=record.city.toLowerCase()===requestedCity.toLowerCase();
        const rainfallMatch=record.rainfall>150;
        return cityMatch && rainfallMatch;

    });
    res.json(alert);

});
//5.Port Listening
app.listen(PORT,()=>{
    console.log('Server is running on Port:',PORT);
});