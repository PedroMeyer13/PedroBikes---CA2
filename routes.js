// code based form what we have learned in class

const express = require('express'),
router = express.Router();

var userCtrl = require('./controllers/user-controller');
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

var bikesCtrl = require('./controllers/bikes-controller');
router.post('/bikes', bikesCtrl.createBike);
router.get('/bikes', bikesCtrl.getBikes);
router.get('/bikes/:kids', bikesCtrl.getKids);
router.delete('/bikes/:item', bikesCtrl.deleteBikes);
router.put('/bikes/:id', bikesCtrl.updateBikes);
//router.get('/bikes/:item', bikesCtrl.getBike);

var rentalCtrl = require('./controllers/rental-controller');
router.get('/rental', rentalCtrl.getRental);
router.post('/rental', rentalCtrl.createRental);
router.delete('/rental/:id', rentalCtrl.deleteRental); 
router.put('/rental/:id', rentalCtrl.updateRental);

module.exports = router;


