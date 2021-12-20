let app = require('./app')


const express = require('express') //importig express to build REST API using CRUD
const cors = require('cors') //using cors to give browser authorization for the frontend to make request to the backend

app.use(cors()); //using cors
app.use(express.json()); //allows express to recognize request objects as a JSON object
app.set('port', process.env.PORT || 9000); // creating the port that we will listen to the server on which is 9000

let server = app.listen(app.get('port')); // storing the port which we want to listen on

server.on('listening', () => console.log('server is listening on', app.get('port'))) //when server is on we are telling the server to listen on the port when we run npm start
server.on('error', (error) => console.error('server is down', error)); //letting me know that the server isn't starting and that tells me that its something that I need to debug

module.exports = server //telling node to export this file