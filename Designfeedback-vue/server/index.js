const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');

require("./models/users");

const usersRoutes = require("./routes/users");

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('DB Connected!'))
  .catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/users', usersRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT , function() {
  console.log('App is running on port: ' + PORT);
});