const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { join } = require('path');
const cors = require('cors');
const climateRoutes = require(join(__dirname, './app/Routes/climateRoutes'));

const app = express();

// Connect DataBase
mongoose.connect(process.env.MONGODBURL || 'mongodb+srv://Diwan:Diwan011@cluster0.tph1urg.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp');

// CORS
app.use(cors({
    origin: '*'
}));

let db = mongoose.connection;
db.on('error', () => {
    console.log('DB unable to connect');
});
db.on('open', () => {
    console.log("connection successful");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Climate Routes
app.use(climateRoutes);

const myPort = process.env.PORT || 5000;
app.listen(myPort, () => {
    console.log(`server is running: http://localhost:${myPort}/`,);
});









