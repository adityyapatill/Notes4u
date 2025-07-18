/* ==========================================================
   FILE: server.js (Aapki main server file, isko update karein)
   ==========================================================
*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Database Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://notesuser:notes12345@cluster0.sznudd4.mongodb.net/Notes4UDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
    .then(() => console.log('Database se successfully connect ho gaye!'))
    .catch((error) => console.log('DATABASE CONNECTION FAILED. Error:', error.message));

// API Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Notes4U API! Server is live.' });
});

// Authentication routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// --- YEH NAYA BADLAAV HAI ---
// Notes routes ko yahan use karein
// Yeh line aapke server ko batati hai ki /api/notes se shuru hone waale
// saare routes ko routes/notes.js file mein dhoondhna hai.
const notesRoutes = require('./routes/notes');
app.use('/api/notes', notesRoutes);


// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server chalu ho gaya hai port ${PORT} par.`);
});
