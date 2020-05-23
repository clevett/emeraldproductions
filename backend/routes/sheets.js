const router = require('express').Router();
let CharacterSheets = require('../models/sheets.model');

router.route('/').get((req, res) => {
  CharacterSheets.find()
    .then(sheets => res.json(sheets))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;