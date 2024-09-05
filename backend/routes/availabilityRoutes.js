const express = require('express');
const { addAvailability, getUserAvailability } = require('../controllers/availabilityController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, addAvailability);
router.get('/', auth, getUserAvailability);

module.exports = router;
