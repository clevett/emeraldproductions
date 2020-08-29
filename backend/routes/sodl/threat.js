const router = require('express').Router();
const sodlTravelThreat = require('../../models/sodl/threat.model');

router.route('/').get((req, res) => {
  sodlTravelThreat.find()
    .then(sodlTravelThreat => res.json(sodlTravelThreat))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;