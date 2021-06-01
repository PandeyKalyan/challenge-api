const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/auth');
const challengeRoutes = require('./routes/challenge');
const answerRoutes = require('./routes/answer');
const userRoutes = require('./routes/user');

// import cron-job
const calculate_top_ten_challenges = require('./jobs/top-ten-challenges');


// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected'))
    .catch(e => console.error(e));

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes middleware
app.use('/api', authRoutes);
app.use('/api', challengeRoutes);
app.use('/api', answerRoutes);
app.use('/api', userRoutes);


app.use(function(err, req, res, next) {
    if(err.name === 'UnauthorizedError') {
      res.status(err.status).send({error:err.message});
      return;
    }
 next();
});

calculate_top_ten_challenges();

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
