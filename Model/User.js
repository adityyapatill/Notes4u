// FILE: models/User.js

const mongoose = require('mongoose');

// Yeh user ka blueprint (schema) hai
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Is blueprint se ek model banayein aur export karein
module.exports = mongoose.model('user', UserSchema);