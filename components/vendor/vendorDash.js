const Jobs = require('../job/job.helper');

module.exports = {
  getDashboard: getDashboard
};

function getDashboard(req, res) {
  Jobs.getJobList((err, list) => {
    if (err) res.status(500).json({message: err});
    else res.status(200).render('vendorDash', {list: list});
  })
}