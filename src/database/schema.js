const { mongoose, runWithDatabase } = require('./database');
//const manyItems = require('./items');

const bestiarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  difficulty: {
    type: Number,
    required: true
  },
  descriptor: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  }
})

const Bestiary = mongoose.model('Bestiary', bestiarySchema)

runWithDatabase(async () => {

  // Create and save a document
  const properties = {
    name: "Apparition",
    difficulty: 1,
    descriptor: "spirit",
    source: "Caecras"
  }

  runWithDatabase(async () => {
    await Bestiary.create(properties)

    let finder = await Bestiary.findOne({ name: 'Apparition' })
    console.log(`Found one: ${finder.item}`);

    let cheapObjects = await Bestiary.find({ difficulty: 1 })
    console.log(`Found ${cheapObjects.length} difficult 1`);
  })
});
