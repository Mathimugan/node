var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get('/',(req,res)=>
{
res.send("Hello World");
});
app.post('/api/addemployee', jsonParser, function (req, res) {
    // create user in req.body
    console.log(req.body);
    res.send(req.body);
  })

app.listen(3000);