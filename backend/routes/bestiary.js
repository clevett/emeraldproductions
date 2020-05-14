const router = require('express').Router();
let Bestiary = require('../models/bestiary.model');

router.route('/').get((req, res) => {
  Bestiary.find()
    .then(beasts => res.json(beasts))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const username = req.body.username
  const name = req.body.name
  const difficulty = Number(req.body.difficulty)
  const source = req.body.source
  const descriptor = req.body.descriptor

  const newBeast = new Bestiary({
    username,
    name,
    difficulty,
    source,
    descriptor,
  });

  newBeast.save()
    .then(() => res.json('Beast added!'))
    .then(err => res.status(400).json(`Error: ${err}`))
});

router.route('/:id').get((req, res) => {
  Bestiary.findById(req.params.id)
    .then(beast => res.json(beast))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Bestiary.findByIdAndDelete(req.params.id)
    .then(() => res.json('Beast deleted.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
  Bestiary.findById(req.params.id)
    .then(beast => {
      beast.username = req.body.username
      beast.name = req.body.name
      beast.difficulty = Number(req.body.difficulty)
      beast.source = req.body.source
      beast.descriptor = req.body.descriptor

      beast.save()
        .then(() => res.json('Beast updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;