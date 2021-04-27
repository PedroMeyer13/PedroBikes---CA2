
// code based from what we have learned in class
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
    Rental.findByIdAndRemove({_id: req.params.id}, function (err, rental) {
      if (err) {
        res.status(400).json(err); 
      } 
      res.json(rental);
    }); 
  };

  exports.updateRental = function(req, res) {
    Rental.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, rental) {
      if (err) {
        res.status(400).json(err); 
      } 
      res.json(rental);
    }); 
  };