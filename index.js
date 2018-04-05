const express=require('express');
const app = express();
const mongoose = require('mongoose');
const config= require('./config/database');
const path =require('path');

mongoose.Promise=global.Promise;

mongoose.connect(config.uri, (err)=>{
   if (err)
     console.log("could not connect to db", err);
   else {
     console.log("connected to db", config.db);
     console.log(config.secret);
     console.log(__dirname);
   }
});

app.use(express.static(__dirname + '/client/dist'));
app.get('/', (req, res)=> { 

   res.sendFile(path.join(__dirname + '/client/dist/index.html'));

});

app.listen(3000, ()=> {

   console.log("listening on port 3000");


});

