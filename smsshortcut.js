// production.js
var deployd = require('deployd');

var xForwarded;

var server = deployd({
  port: process.env.PORT || 8001,
  env: 'production',
  db: {
    host: 'localhost',
    port: 27017,
    name: 'deployd-smsshortcut' //,
    // credentials: {
    //   username: 'username',
    //  password: 'password'
    // }
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});

// server.on('request', function (req, res) {
//    console.log(req.socket.ip);
// })
