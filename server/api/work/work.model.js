'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WorkSchema = new Schema({
  _id: String,
  num: Number,
  title: String,
  year: Number,
  hidden: Boolean,
  dimensions: String,
  description: String,
  media: String,
  photoMain: String,
  photoThumb: String,
  // photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }]
  photos: [String],
});

WorkSchema.methods.allPhotos = function() {
  return this.photoMain.concat(this.photos);
}

module.exports = mongoose.model('Work', WorkSchema);