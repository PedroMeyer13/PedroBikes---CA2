var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    bike: String,
    kids: Boolean,
    item: String,
    price: Number
},
{ timestamps: false,  versionKey: false });

module.exports = mongoose.model('Bikes', imageSchema);