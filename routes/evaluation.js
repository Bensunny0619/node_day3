const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/evaluationController');

router.get('/', ctrl.evaluate);

module.exports = router;
