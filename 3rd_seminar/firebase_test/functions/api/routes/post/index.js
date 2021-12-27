const express = require('express');
const router = express.Router();

router.get('/:id', require('./postIdGET'));
router.get('/', require('./postAllGET'));
router.post('/', require('./postPOST'));
router.put('/:id', require('./postPUT'));
router.delete('/:id', require('./postDELETE'));
module.exports = router;