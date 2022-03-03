const express = require('express');
const router = express.Router();
const { getAllWines, addWine } = require('../controllers/wineController');

router.get('/', getAllWines);
router.post('/create', addWine);

module.exports = router;