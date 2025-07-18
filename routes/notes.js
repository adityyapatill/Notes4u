const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// ROUTE: GET /api/notes
// DESC:  Database se saare notes fetch karna
// ACCESS: Public (koi bhi dekh sakta hai)
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Hum yahan aur bhi routes add karenge (jaise ek note kharidna, etc.)

module.exports = router;
