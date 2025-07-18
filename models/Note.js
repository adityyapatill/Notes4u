const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    university: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    icon: { // Emoji ya icon ka naam store karne ke liye
        type: String,
        default: '📚'
    },
    fileUrl: { // Asli PDF file ka link (yeh hum baad mein use karenge)
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('note', NoteSchema);
