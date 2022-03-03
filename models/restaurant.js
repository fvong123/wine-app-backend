const mongoose = require('mongoose');
const { Schema } = mongoose;

const RestaurantSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Need to provide name.'],
  };
  wine: {
    type: String
  };
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);