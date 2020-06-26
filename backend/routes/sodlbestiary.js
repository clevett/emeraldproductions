const router = require('express').Router();
let sodlbestiary = require('../models/sodlbestiary.model');

router.route('/').get((req, res) => {
  sodlbestiary.find()
    .then(sodlbestiary => res.json(sodlbestiary))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;