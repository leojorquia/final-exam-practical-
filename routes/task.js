const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  db.collection('tasks').find().toArray((err, result) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send(result);
    }
  });
});

router.post('/', (req, res) => {
  const task = {
    name: req.body.name,
    description: req.body.description,
    dueDate: req.body.dueDate
  };
  db.collection('tasks').insertOne(task, (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
  } else {

      res.send({ message: 'Task added successfully!' });

    }

  });

});

module.exports = router;    
