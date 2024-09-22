const express = require('express');
const router = express.Router();
const controller = require('../controller/lhenieController');

router.get('/', controller.lhen);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/services', controller.services);
router.get('/portfolio', controller.portfolio);
module.exports = router;
