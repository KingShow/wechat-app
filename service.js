const express = require('express');
const router = express.Router();
const debug = require('debug')('ex-app:server');
const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const multipart = require('connect-multiparty');
const bodyParser = require('body-parser');
const urlHelper = require('./routes');

const app = express();
const port = process.env.PORT || '7788';

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.set('port', port);

urlHelper.setRequestUrl(app);
const options = {
  key: fs.readFileSync('./ceci/privatekey.pem', 'utf8'),
  cert:fs.readFileSync('./ceci/certificate.pem', 'utf8')
};
const server = http.createServer(app);
const multipartMiddleware = multipart();

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// app.all('*', function(req, res, next) {  
//     res.header("Access-Control-Allow-Origin", `*`);
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
//     res.header("Content-Type", "application/json;charset=utf-8");  
//     next();  
// });

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  
  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
