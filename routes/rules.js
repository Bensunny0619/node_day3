const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ruleController');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/:id', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
