const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();
app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/candidateRoutes'));

module.exports = app;