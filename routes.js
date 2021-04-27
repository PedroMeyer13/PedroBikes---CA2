const express = require('express'),
router = express.Router();

var userCtrl = require('./user-controller');
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);


var bikesCtrl = require('./bikes-controller');
router.post('/bikes', bikesCtrl.createBike);
router.get('/bikes', bikesCtrl.getBikes);
router.get('/bikes/:kids', bikesCtrl.getKids);
router.delete('/bikes/:item', bikesCtrl.deleteBikes);
router.put('/bikes/:id', bikesCtrl.updateBikes);
//router.get('/bikes/:item', bikesCtrl.getBike);

var rentalCtrl = require('./rental-controller');
router.get('/rental', rentalCtrl.getRental);
router.post('/rental', rentalCtrl.createRental);
router.delete('/rental/:id', rentalCtrl.deleteRental); 
router.put('/rental/:id', rentalCtrl.updateRental);

module.exports = router;


