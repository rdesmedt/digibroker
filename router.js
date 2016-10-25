'use strict';
const main = require('./components/main/main');
const job = require('./components/job/job');
const pDash = require('./components/purchaseDash/purchaseDash');
const vDash = require('./components/vendor/vendorDash');
const vJobDetail = require('./components/vendor/vendorJobDetail');

module.exports = (app) => {
  app.get('/', main.landing);

  // purchaser

  // jobs
  app.get('/createJob', job.getCreateJob);
  app.post('/createJob', job.createJob);
  app.get('/purchase/jobDetail/:id', job.purchaseDetail);

  // dashboard
  app.get('/purchaseDash', pDash.getDashboard);

  // vendor

  // dashboard
  app.get('/vendor/dash', vDash.getDashboard);
  app.get('/vendor/jobDetail/:id', vJobDetail.getJobDetail);
};