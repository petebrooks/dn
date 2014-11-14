'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  name: String,
  path: String,
  work: { type: mongoose.Schema.Types.ObjectId, ref: 'Work'}
});

module.exports = mongoose.model('Photo', PhotoSchema);