const express= require('express');
const path=require('path');
var bodyParser = require("body-parser");
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const exphbs=require('express-handlebars');
const app=express();



dotenv.config({path:'./config/config.env'});
connectDB();



//Loggers
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

//handlebars helpers
const {print}=require('./helpers/hbs')

//handlebars
app.engine('.hbs', exphbs({
    helpers:{print},
    defaultLayout:'main',
    extname: '.hbs'}));
app.set('view engine', '.hbs');



//Routes
app.use('/', require('./routes/index.js'));
app.use('/test', require('./routes/index.js'));


//static
app.use(express.static(path.join(__dirname,'public')))

const PORT= process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)