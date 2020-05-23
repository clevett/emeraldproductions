const mongoose = require('mongoose');

const sheetSchema = new mongoose.Schema({
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

const Sheet = mongoose.model('Sheet', sheetSchema)

module.exports = Sheet;
