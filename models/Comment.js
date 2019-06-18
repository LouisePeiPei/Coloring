'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var commentSchema = Schema( {
  TypeMakeup: String,
  ColorCode: String
} );

module.exports = mongoose.model( 'comment', commentSchema );
