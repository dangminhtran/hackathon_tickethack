const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:W3oCngonSpyAHy9r@cluster0.ggmvkty.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));