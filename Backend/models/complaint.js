const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  hostelName: {
    type: String,
    required: true,
    enum: ['Milkha Bhawan A', 'Milkha Bhawan B', 'Milkha Bhawan C'] 
  },
  room: {
    type: Number,
    required: true
  },
  workType: {
    type: String,
    required: true,
  },
  problemDescription: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String, 
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Complaint', complaintSchema);
