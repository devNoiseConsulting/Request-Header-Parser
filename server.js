var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log(req.headers);
    console.log(req.ip);
  console.log(req.connection);
    var output = {
      "ipaddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      "language": req.headers['accept-language'],
      "software": req.headers['user-agent'].split('(')[1].split(')')[0]
    };
        res.end(JSON.stringify(output));

});

app.listen(8080, function() {
  console.log('Example app listening on port 8080!')
});

