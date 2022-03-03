const mongoose = require('mongoose');
const { Schema } = mongoose;

const WineSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Need to provide name.'],
  },
  year: String,
  region: String,
  country: String,
  uniqueId: {
    type: String,
    required: [true, 'This is required'],
    unique: true
  },
  price: Number,
  rating: Number,
  review: Number,
  rrp: Number,
  variety: String,
  colour: {
    type: String,
    enum: ['Red','White','Orange']
  },
  style: String,
  abv: Number
});

module.exports = mongoose.model('Wine', WineSchema);