const express = require('express');
const connectDB = require('./config/db');

const app = express();

const movies = require('./routes/api/movies');

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/movies', movies);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));