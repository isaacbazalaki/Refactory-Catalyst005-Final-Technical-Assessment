const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const coronaRoute = require('./routes/coronaRoute');
const path = require("path");
const Admin = require("./models/CoronaModel");
require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static("public"));
app.set('view engine','pug')
app.set('views', __dirname + '/views');

app.use('/',coronaRoute)

//connect to the db

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

  mongoose.connection
  .on('open', () => {
    console.log('Mongoose is back what whaaat');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
  
  //error page
app.get('*', (req, res) => { 
  res.send('404 page not found!');
});



app.listen(4400, () => { 
  console.log("listening at 44hunnid");
});