require('dotenv').config({ quite: true });
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3001',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to job tracker...' });
});

module.exports = app;