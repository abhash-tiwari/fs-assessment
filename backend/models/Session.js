const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
