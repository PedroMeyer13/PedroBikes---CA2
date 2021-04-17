var Bikes = require('./models/bikes')

exports.getBikes = function(req, res) {
    Bikes.find({}, function (err, bikes) {
      if (err) {
        res.status(400).json(err); 
      } 
      res.json(bikes);
    }); 
  };