// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // sesuaikan dengan frontend kamu
  credentials: true
}));
app.use(morgan('dev'));

// Routes
app.use('/api', routes);

// Root endpoint
app.get('/', (req, res) => {
  res.send("Welcome to My API BRO");
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Not found'
  });
});

// Error Handler (penting: harus ada 4 argumen)
app.use((err, req, res, next) => {
  console.error(err); // log error ke console
  res.status(500).json({
    status: 'error',
    message: 'Internal server error: ' + err.message,
    data: null
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
