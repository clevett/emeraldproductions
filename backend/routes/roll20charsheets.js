const router = require('express').Router();
let CharacterSheets = require('../models/roll20charsheets.model');

router.route('/').get((req, res) => {
  CharacterSheets.find()
    .then(roll20charsheets => res.json(roll20charsheets))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;