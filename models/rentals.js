var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    bike: String,
    user: String,
    days: Number
},
{ timestamps: false,  versionKey: false });

module.exports = mongoose.model('Rental', imageSchema);