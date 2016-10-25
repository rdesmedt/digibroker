'use strict';
const jobHelper = require('./job.helper');

module.exports = {
  getCreateJob: getCreateJob,
  createJob: createJob,
  purchaseDetail: purchaseDetail,
};

function getCreateJob(req, res){
  res.status(200).render('createJob');
}

function createJob(req, res){
  jobHelper.createJob(req.body, (err, list) => {
    if(err) {
      console.log('ERROR: ', err);
      res.status(500).json({message: 'something went wrong'});
    }else {
      res.redirect('/purchaseDash');
    }
  });
}

function purchaseDetail(req, res){
  jobHelper.getJob(req.params.id, (err, job) => {
    if(err) res.status(500).json({message: 'something went wrong'});
    else res.status(200).render('purchaseJobDetail', {job: job});
  });
}