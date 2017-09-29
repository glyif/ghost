const express = require('express');
const app = express();

app.use(express.static('static'));
app.use(express.static('.'));

app.listen(3000, function () {
  console.log('Running all main HTML and your JS files.....')
});