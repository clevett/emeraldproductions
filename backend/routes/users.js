const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  //GET LIST OF ALL USERS FROM MONGO
  User.find()
    //RETURN USERS IN JSON
    .then(users => res.json(users))
    //RETURN ERROR
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  //SAVE USERS TO DATA BASE
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;