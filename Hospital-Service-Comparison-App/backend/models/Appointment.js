const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  userId: String,
  hospitalId: String,
  service: String,
  slot: String
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
