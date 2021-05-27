const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/auth');
const challengeRoutes = require('./routes/challenge');


// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch(e => console.error(e));

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes middleware
app.use('/api', authRoutes);
app.use('/api', challengeRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
