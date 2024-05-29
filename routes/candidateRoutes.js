const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');
const auth = require('../middleware/auth');

router.post('/candidate', auth, candidateController.addCandidate);
router.get('/candidate', auth, candidateController.getCandidates);

module.exports = router;
