const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// Replace the uri string with your MongoDB connection string
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
  }
  console.log('Connected to MongoDB Atlas...');
  const db = client.db('test');
  
  const userRoutes = require('./routes/user');
  const taskRoutes = require('./routes/task');
  
  app.use('/users', userRoutes);
  app.use('/tasks', taskRoutes);
  
  app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
  });
});
