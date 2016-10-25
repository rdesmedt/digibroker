const Jobs = require('../job/job.helper');

module.exports = {
  getJobDetail: getJobDetail
};

function getJobDetail (req, res){
  Jobs.getJob(req.params.id, (err, job) => {
    if (err) res.status(500).json({message: err});
    else res.status(200).render('vendorJobDetail', {job: job});
  });
}

