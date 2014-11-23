'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WorkSchema = new Schema({
  _id: String,
  title: String,
  year: Number,
  dimensions: String,
  description: String,
  media: String,
  photos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }],
  primary_photo: { type: mongoose.Schema.Types.ObjectId, ref: 'Photo '},
  image: String
});

module.exports = mongoose.model('Work', WorkSchema);