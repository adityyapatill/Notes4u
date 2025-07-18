const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs'); // File system module ko import kiya

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// --- FINAL DEBUG CHECK ---
// Hum check kar rahe hain ki auth.js file server ko mil rahi hai ya nahi.
try {
    if (fs.existsSync('./routes/auth.js')) {
        console.log("SUCCESS: routes/auth.js file mil gayi!");
    } else {
        console.log("ERROR: routes/auth.js file nahi mili! Please check folder structure.");
    }
} catch(err) {
    console.error("Error checking file:", err);
}
// --- DEBUG CHECK END ---


const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://notesuser:notes12345@cluster0.sznudd4.mongodb.net/Notes4UDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
    .then(() => console.log('Database se successfully connect ho gaye!'))
    .catch((error) => console.log('DATABASE CONNECTION FAILED. Error:', error.message));

// API Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Notes4U API! Server is live.' });
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const notesRoutes = require('./routes/notes');
app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server chalu ho gaya hai port ${PORT} par.`);
});
