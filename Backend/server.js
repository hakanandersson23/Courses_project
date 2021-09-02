const http =require('http');
const debug = require('debug')('node')
//importing the app from the app.js
const app = require('./app')
const port =process.env.PORT || 3000;
// Creates the server, listens for incoming requests.
const server = http.createServer(app);


//Keeps the server running
server.listen(port);
