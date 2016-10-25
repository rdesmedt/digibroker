'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let offer = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId()
  },
  jobId: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  q1: {
    type: Number,
    required: true
  },
  q2: {
    type: Number
  },
  q3: {
    type: Number
  }
});

module.exports = mongoose.model('Offer', offer);