'use strict';
const Offer = require('./offer.model');

module.exports = {
  createJobOffer: createJobOffer
};

function createJobOffer (req, res){

  let offer = new Offer();

  for(let key in req.body) offer[key] = req.body[key];

  offer.jobId = req.params.id;

  console.log(offer);

  res.redirect('/vendor/dash');
}