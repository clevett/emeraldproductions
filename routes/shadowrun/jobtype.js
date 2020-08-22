const router = require('express').Router();
const jobtype = require('../../models/shadowrun/mission.model');

router.route('/').get((req, res) => {
  jobtype.find()
    .then(jobtype => res.json(jobtype))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;