var mongoose = require('mongoose');
var Schema = mongoose.Schema ; //??Schema object

// blueprint
var schema = new Schema({
  content: {type: String, required: true},
  user: {type: Schema.Types.ObjectId}
});

// exports??
module.exports = mongoose.model('Message', schema);
