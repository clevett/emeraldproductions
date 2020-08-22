const router = require('express').Router();
const CharacterSheets = require('../../models/roll20/charsheets.model');

router.route('/').get((req, res) => {
  CharacterSheets.find()
    .then(shadowrun5ejobtype => res.json(shadowrun5ejobtype))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;