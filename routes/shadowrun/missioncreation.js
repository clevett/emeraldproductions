const router = require('express').Router();
const missioncreation = require('../../models/shadowrun/missioncreation.model');
//const missioncreation = require('../../models/sodl/bestiary.model');

router.route('/').get((req, res) => {
  missioncreation.find()
    .then(shadowrun5mission => res.json(shadowrun5mission))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;