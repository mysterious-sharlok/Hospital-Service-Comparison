const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  rating: Number,
  services: [String],
  distance: String,
  priceList: Object
});

module.exports = mongoose.model('Hospital', HospitalSchema);
