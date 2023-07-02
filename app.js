const express = require('express');
const connectDB = require('./config/db');

const app = express();
const cors = require('cors');

const movies = require('./routes/api/movies');

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/movies', movies);

const port = process.env.PORT || 8000;

app.listen(port, "0.0.0.0", () => console.log(`Server running on port ${port}`));