const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  db.collection('users').find().toArray((err, result) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send(result);
    }
  });
});

router.post('/', (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email
  };
  db.collection('users').insertOne(user, (err, result) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      res.send({ message: 'User added successfully!' });
    }
  });
});

module.exports = router;
