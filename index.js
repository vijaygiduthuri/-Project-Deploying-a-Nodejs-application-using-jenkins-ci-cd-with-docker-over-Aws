var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('** Deployed a Node-js application using jenkins ci/cd and git over AWS  :) ** welcome '); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
