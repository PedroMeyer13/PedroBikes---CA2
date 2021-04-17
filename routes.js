const express = require('express'),
router = express.Router();

var userCtrl = require('./user-controller');

router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

var bikesCtrl = require('./bikes-controller');
router.post('/bikes', bikesCtrl.createBike);
router.get('/bikes', bikesCtrl.getBikes);
router.get('/bikes/:kids', bikesCtrl.getKids);
router.delete('/bikes/:item', bikesCtrl.deleteBikes);
//router.get('/bikes/:item', bikesCtrl.getBike);

module.exports = router;


