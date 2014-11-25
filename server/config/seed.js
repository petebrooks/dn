/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Work = require('../api/work/work.model'),
    Photo = require('../api/photo/photo.model'),
    works_collection = require('./works_collection'),
    photos_collection = require('./photos_collection');


Work.find({}).remove(function() {
  works_collection().forEach(function(work_data) {
    Work.create(work_data);
  })
});

// Photo.find({}).remove(function() {
//   photos_collection().forEach(function(photo_data) {
//     Photo.create(photo_data);
//   });
// });
// Work.findOne({_id: 'idyll_hands'})
//   .populate('photos');

Work.findOne({_id: 'urchin_1'})
  .populate('photos');


// Work.findOne({_id: 'urchin_1'}, function(w) {
//   console.log(w._id);
//   console.log(w.photos);
// })
