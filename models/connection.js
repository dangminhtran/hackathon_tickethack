const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://dangminhtran:0okzihdncIFY2ELX@mydatabase.bv6sd10.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));