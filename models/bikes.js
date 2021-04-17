var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    bike: String,
    kids: Boolean,
    item: String,
    price: Number
},
{ timestamps: true });

module.exports = mongoose.model('Bikes', imageSchema);