var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/', function(req, res) {
  var output = {
    "ipaddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    "language": req.headers['accept-language'],
    "software": req.headers['user-agent'].split('(')[1].split(')')[0]
  };
  res.end(JSON.stringify(output));
});

app.listen(app.get('port'), function() {
  console.log('Request Header Parser microservice is listening on port ', app.get('port'));
});
