/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Work = require('../api/work/work.model');
// var User = require('../api/user/user.model');
// var Photo = require('../api/photo/photo.model');

Work.find({}).remove(function() {
  Work.create({
    title: "Vroomb",
    year: 2014,
    image: "assets/images/vromb_main.jpg"
  }, {
    title: "Unlimited Intimacy",
    year: 2012,
    image: "assets/images/unlimited-intimacy_main.jpg"
  }, {
    title: "Fish",
    image: "assets/images/fish_main.jpg"
  }, {
    title: "Not A Grave",
    image: "assets/images/not-a-grave_main.jpg"
  }, {
    title: "Monkey",
    image: "assets/images/monkey_main.jpg"
  }, {
    title: "Come On Down",
    image: "assets/images/come-on-down_detail.jpg"
  }, {
    title: "Plastic Case",
    image: "assets/images/case_detail-3.jpg"
  }, {
    title: "A Spot",
    image: "assets/images/a-spot_main.jpg"
  }, function() {
      console.log('finished populating works');
    }
  );
});

// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     name: 'Test User',
//     email: 'test@test.com',
//     password: 'test'
//   }, {
//     provider: 'local',
//     role: 'admin',
//     name: 'Admin',
//     email: 'admin@admin.com',
//     password: 'admin'
//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });