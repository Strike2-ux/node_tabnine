const controller = require('../controllers/dev');
const router = require('express').Router();

router.get('/', controller.version);