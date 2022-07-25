const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

function getUserFromDB(userId) {
  return {
    id: userId,
    name: (Math.random() + 1).toString(36).substring(7),
    createdAt: new Date()
  }
}

app.get('/user/:userId', function(req, res) {
  res.send(getUserFromDB(req.params.userId));
});

app.listen(3000);