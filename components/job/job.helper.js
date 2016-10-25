'use strict';
const Job = require('./job.model');
module.exports = {
  createJob: createJob,
  getJobList: getJobList,
  getJob: getJob
};

function createJob(input, done){
  let job = new Job();
  for (let key in input) job[key] = input[key];
  job
    .save()
    .then((data) =>{
      return done(null, data);
    })
    .catch((err) =>{
      return done(err, null);
    });
}

function getJobList(done){
  Job
    .find()
    .sort({offerTime: -1})
    .exec((err, data) => {
      if (err) return done(err, null);
      else return done(null, data);
    });
}

function getJob(id, done){
  Job
    .findOne({_id: id})
    .exec((err, job) => {
      if(err) return done(err, null);
      else return done(null, job);
  })
}