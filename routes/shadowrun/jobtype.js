const router = require('express').Router();
let jobtype = require('../../models/shadowrunmission.model');

router.route('/').get((req, res) => {
  shadowrun5ejobtype.find()
    .then(shadowrun5ejobtype => res.json(shadowrun5ejobtype))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;