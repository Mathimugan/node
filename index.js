var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());
require("dotenv").config();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const { v4: uuidv4 } = require('uuid');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const AWS = require('aws-sdk');
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
AWS.config.update({ region: 'ap-southeast-1',accessKeyId: "AKIAVXCHOFVI2OSH7Z4C",
secretAccessKey:"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"});
const client = new AWS.DynamoDB.DocumentClient();
const tableName = 'employee';
var params = {
    TableName: tableName
};
app.get('/',(req,res)=>
{
res.send("Hello World");
console.log("test");
});
app.post('/api/addemployee', jsonParser, function (req, res) {
    var body = req.body;
    var params = {
        TableName: tableName,
        Item: {
            // creates a new uuid
            "Id": uuidv4(),
            "name:": body["name"],
            "email": body["email"],
            "age": body["age"],
            "submission_time": body["submission_time"],
            "response_id": body["response_id"]
        }
    };
  
    


    client.put(params, (err, data) => {
        if (err) {
            console.error("Unable to add item.");
            console.error("Error JSON:", JSON.stringify(err, null, 1));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 1));
        }
    });
    res.status(200).send("Data Inserted Successfully");
  });

  

app.listen(3000);