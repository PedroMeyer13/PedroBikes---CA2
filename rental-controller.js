var Rental = require('./models/rentals')

exports.createRental = function(req, res) { 
    var newrental = new Rental(req.body);
    console.log(newrental);
    newrental.save(function (err, rental) { 
        if (err) { 
            res.status (400).json(err);
        }
        res.json(rental); 
  });
  };

  exports.getRental = function(req, res) {
    Rental.find({}, function (err, rental) {
      if (err) {
        res.status(400).json(err); 
      } 
      res.json(rental);
    }); 
  };

  exports.deleteRental = function(req, res) {
    Rental.deleteOne({bike: req.params.bike, user: req.params.user, days: req.params.days}, function (err, rental) {
      if (err) {
        res.status(400).json(err); 
      } 
      res.json(rental);
    }); 
  };