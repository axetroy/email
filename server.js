/**
 * Created by axetroy on 17-7-6.
 */

const express = require('express');
const bodyParser = require('body-parser');
const email = require('./lib/email');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
  email
    .send(req.query)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      console.error(err);
      res.status(400).json(err);
    });
});

app.post('/', function(req, res) {
  email
    .send(req.body)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      console.error(err);
      res.status(400).json(err);
    });
});


app.listen('3000', function() {
  console.log('Listening on 3000');
});
