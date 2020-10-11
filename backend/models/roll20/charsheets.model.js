const mongoose = require('mongoose');

const roll20charsheetsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const CharacterSheets = mongoose.model('roll20charsheets', roll20charsheetsSchema)

module.exports = CharacterSheets;
