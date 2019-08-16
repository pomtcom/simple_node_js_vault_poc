var express = require('express');

// Constants
var DEFAULT_PORT = 8088;
var PORT = process.env.PORT || DEFAULT_PORT;


// MYSQL_OMX_INSTANCE1 = process.env.MYSQL_OMX_INSTANCE1;
// MYSQL_OMX_INSTANCE2 = process.env.MYSQL_OMX_INSTANCE2; 

// console.log('environment variable is ' + process.env.TEST1) ;

var MYSQL_OMX_INSTANCE1 = (process.env.MYSQL_OMX_INSTANCE1 === undefined) ? '' : process.env.MYSQL_OMX_INSTANCE1;
var MYSQL_OMX_INSTANCE2 = (process.env.MYSQL_OMX_INSTANCE2 === undefined) ? '' : process.env.MYSQL_OMX_INSTANCE2;

response_json = {
  "Application" : "Simple node js application",
  "Description" : "Integration with Vault during deployment time",
  "secrets" : {
    "MYSQL_OMX_INSTANCE1" : MYSQL_OMX_INSTANCE1,
    "MYSQL_OMX_INSTANCE2" : MYSQL_OMX_INSTANCE2
  }
}

// App
var app = express();
app.get('/', function (req, res) {
  // res.send('Simple node js application with Vault Integration Test\n ');
  // res.json(response_json);

  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(response_json, null, 4));

});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT);
console.log('response json is ' + JSON.stringify(response_json, null, 4));
