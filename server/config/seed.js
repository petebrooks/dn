/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Work = require('../api/work/work.model'),
    Photo = require('../api/photo/photo.model'),
    works_collection = require('./works_collection'),
    photos_collection = require('./photos_collection');

Photo.find({}).remove(function() {
  photos_collection().forEach(function(photo_data) {
    Photo.create(photo_data);
  })
});

Work.find({}).remove(function() {
  works_collection().forEach(function(work_data) {
    var w = Work.create(work_data);
    var photos = Photo.find({work_id: work_data._id});
    // console.log("PHOTOS:   " + photos.length);
  })
});
