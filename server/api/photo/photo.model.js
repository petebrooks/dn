'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  name: String,
  filepath: String,
  type: String,
  work: { type: mongoose.Schema.Types.ObjectId, ref: 'Work'},
  work_id: String
});

module.exports = mongoose.model('Photo', PhotoSchema);