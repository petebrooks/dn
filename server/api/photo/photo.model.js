'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  name: String,
  filepath: String,
  type: String,
  work_id: String
  // work_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Work' }
});

module.exports = mongoose.model('Photo', PhotoSchema);