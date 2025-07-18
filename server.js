const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // CORS ko import kiya

const app = express();

// --- Middlewares ---
app.use(express.json()); // JSON parsing ke liye
app.use(cors()); // CORS ko enable kiya, taaki frontend connect kar sake

// --- Database Connection ---
const MONGO_URI = "mongodb+srv://notesuser:notes12345@cluster0.sznudd4.mongodb.net/Notes4UDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
    .then(() => console.log('Database se successfully connect ho gaye!'))
    .catch((error) => console.log('DATABASE CONNECTION FAILED. Error:', error.message));


// --- API Routes ---
app.get('/', (req, res) => {
    // Yeh route check karne ke liye hai ki server live hai ya nahi.
    res.json({ message: 'Welcome to Notes4U API! Server is live.' });
});

// Yahan aapke User Authentication ke routes aayenge
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);


// --- Server Start ---
const PORT = process.env.PORT || 5000; // Render apne aap PORT dega

app.listen(PORT, () => {
    console.log(`Server chalu ho gaya hai port ${PORT} par.`);
});