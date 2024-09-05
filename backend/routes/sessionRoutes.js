const express = require('express');
const { createSession, getUserSessions } = require('../controllers/sessionController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createSession);
router.get('/', auth, getUserSessions);

module.exports = router;
