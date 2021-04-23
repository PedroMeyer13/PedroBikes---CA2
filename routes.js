const express = require('express'),
router = express.Router();

var userCtrl = require('./user-controller');

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

module.exports.UPLOAD_PATH = "uploads";

var bikesCtrl = require('./bikes-controller');
router.post('/bikes', bikesCtrl.createBike);
router.get('/bikes', bikesCtrl.getBikes);
router.get('/bikes/:kids', bikesCtrl.getKids);
router.delete('/bikes/:item', bikesCtrl.deleteBikes);
//router.get('/bikes/:item', bikesCtrl.getBike);

module.exports = router;


