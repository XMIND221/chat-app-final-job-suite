const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Accès autorisé au chat !', user: req.user });
});

module.exports = router;