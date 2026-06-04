 // create a new Server for Weather Report
 //1.Import libraries
 const express=require('express');
 const mongoose=require('mongoose');
 const cors=require('cors');

 //2.create an instance of Server
 const app=express();
 const PORT=3000;
 //3.Global Middleware Configuration
 app.use(express.json());
 app.use(cors());

 //4.Routes endpoints
 //create some weather records using an array of objects
 const weatherData=[{city:"Colombo",rainfall:100},{city:"Kandy",rainfall:200},{city:"Galle",rainfall:150}];

app.get('/weather/:city', (req, res) => {
    const requestedCity = req.params.city;
    const weatherRecord = weatherData.find(records => records.city.toLowerCase() === requestedCity.toLowerCase());
    
    if (weatherRecord) {
        res.send('The rainfall in ' + requestedCity + ' is ' + weatherRecord.rainfall + ' mm');
    } else {
        res.send('Sorry, we do not have weather data for ' + requestedCity);  
    } 
});
 //5.Port Listening
 app.listen(PORT,()=>{
   console.log('Server is running on Port:',PORT); 
 });
