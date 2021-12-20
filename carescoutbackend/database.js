//this is where I create me database

require("dotenv") //we need dotenv for deployment
let mongoose = require('mongoose'); //importing mongoose. we are using this because we created out schema with mongoose.
const db = mongoose.connection; //we are setting mongoose to its default connection

db.on('error', (err) => { console.log('ERROR: ', err)}); //catching errors when trying to create database
db.on('connected', () => { console.log('mongo connected')}) // letting me know that the dataabse is created
db.on('disconnected', () => { console.log('mongo disconnected line')}) //lett me know that the database is disconnected for some reason



let mongooseConnectionConfig = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
};


let connectionString = ""; //setting our connectionString variable to an empty string to assign it something later

if(process.env.NODE_ENV === "production") {// in short we are saying if our environment is  a production environment
    connectingString = process.env.DB_URL //then we want to assign connectionString a new value which is getting our user environment which in our case is production
} else {
    connectionString = 'mongodb://localhost/ProviderData'; //else which is saying if we are not in a production environment and instead we are in a development environment we want to assign connectionString a value of our mongodb database
    console.log('checked database connection') //so whether we are in production or development we are using the same mongodb database
}


mongoose.connect(connectionString, mongooseConnectionConfig); //now we are connecting mongoose to our connection string