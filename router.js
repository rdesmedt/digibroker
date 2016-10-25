'use strict';
const main = require('./components/main/main');
const job = require('./components/job/job');
const pDash = require('./components/purchaseDash/purchaseDash');
const vDash = require('./components/vendor/vendorDash');
const vJobDetail = require('./components/vendor/vendorJobDetail');
const offer = require('./components/offers/offer');

module.exports = (app) => {
  app.get('/', main.landing);

  // purchaser

  // jobs
  app.get('/purchaser/createJob', job.getCreateJob);
  app.post('/purchaser/createJob', job.createJob);
  app.get('/purchaser/jobDetail/:id', job.purchaseDetail);

  // dashboard
  app.get('/purchaser/dash', pDash.getDashboard);

  // vendor

  // dashboard
  app.get('/vendor/dash', vDash.getDashboard);

  // job
  app.get('/vendor/jobDetail/:id', vJobDetail.getJobDetail);
  app.post('/vendor/jobOffer/:id', offer.createJobOffer);

};