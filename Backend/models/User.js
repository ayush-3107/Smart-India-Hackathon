const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  role: { type: String, enum:['manager', 'crew'], required: true }, // Manager or Crew

  // Crew-specific fields
  crewRole: { type: String, required: function() { return this.role === 'Crew'; } }, // Conductor/Driver
  experience: { type: Number, required: function() { return this.role === 'Crew'; } },
  skillLevel: {
    type: String,
    enum: ['Urban', 'Busy routes', 'Suburban', 'Rural', 'Highway'],
    required: function() { return this.role === 'Crew'; }
  },
  timingPreferences: { type: String, required: function() { return this.role === 'Crew'; } },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
