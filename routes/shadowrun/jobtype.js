const router = require('express').Router();
const JobType = require('../../models/shadowrun/jobtype.model');

router.route('/').get((req, res) => {
  JobType.find()
    .then(shadowrun5ejobtype => res.json(shadowrun5ejobtype))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;