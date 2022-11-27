
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const expressLayouts = require('express-ejs-layouts');
const userRoute = require('./routes/user');


//init dotenv
dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;

//Express init
const app = express();

//Init ejs
app.set("view engine", "ejs");
//express layOut
app.use(expressLayouts);
app.set('layout', 'layouts/app');


//Data manage
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));


//Folter static
app.use(express.static('public'));

 
//User Route
app.use('/user', userRoute)

//create server
app.listen(PORT, () => {
    console.log(`server is runnin ${PORT}`.bgGreen.black);
});

 
 