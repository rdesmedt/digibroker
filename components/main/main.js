'use strict';

module.exports = {
  landing: landing
};

function landing(req, res) {
  res.status(200).render('main');
}