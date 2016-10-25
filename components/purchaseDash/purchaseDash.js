'use strict';
const Jobs = require('../job/job.helper');

module.exports = {
  getDashboard: getDashboard
};

function getDashboard (req, res){
  Jobs.getJobList((err, list) => {
    if (err) console.log(err);
    else {
      console.log(list);
      res.status(200).render('purchaseDash', {list: list});
    }

  })
}