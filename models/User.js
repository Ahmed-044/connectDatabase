const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  status: { type: String, enum: ['active', 'inactive'], required: true }
});

module.exports = mongoose.model('User', userSchema);
