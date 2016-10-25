'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let job = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId()
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
  },
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  size:{
    type: String,
    required: true
  },
  colouring:{
    type: String,
    required: true
  },
  finishing:{
    type: String,
    required: true
  },
  packaging:{
    type: String,
    required: true
  },
  delivery:{
    type: String,
    required: true
  },
  deliverTime:{
    type: String,
    required: true
  },
  offerTime:{
    type: String,
    required: true
  },
  offers: [{
    type: Schema.Types.ObjectId, ref: 'Offer'
  }]
});

module.exports = mongoose.model('Job', job);