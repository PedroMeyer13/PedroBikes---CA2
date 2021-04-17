var Bikes = require('./models/bikes')

exports.getBikes = function(req, res) {
  Bikes.find({}, function (err, bikes) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(bikes);
  }); 
};

  exports.getBike = function(req, res) {
    Bikes.findOne({item: req.params.item,}, function (err, bikes) {
      if (err) {
        res.status(400).json(err); 
      } 
      res.json(bikes);
    }); 
  };


  exports.getKids = function(req, res) {
    Bikes.find({kids: req.params.kids,}, function (err, bikes) {
      if (err) {
        res.status(400).json(err); 
      } 
      res.json(bikes);
    }); 
  };

  
exports.createBike = function(req, res) {  
  var newbike = new Bikes({
    bike: req.body.bike,
    kids: req.body.kids,
    item: req.body.item,
    price: req.body.price
});
  newbike.save(function (err, bikes) { 
    if (err) { 
        res.status (400).json(err);
    }

    res.json(bikes); 
});
};
  
exports.deleteBikes = function(req, res) {
  Bikes.deleteOne({item: req.params.item}, function (err, bikes) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(bikes);
  }); 
};

/*exports.deleteBikes = function(req, res) {
  Bikes.findByIdAndRemove({_id: req.params.id}, function (err, bikes) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(bikes);
  }); 
};*/