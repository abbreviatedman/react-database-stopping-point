const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const McuRouter = require('./routes/McuRouter');
const connectToMongoDB = require('./db/mongodb');

const app = express();
dotenv.config();

// for parsing form data as JSON
app.use(express.urlencoded({extended: false}));
// reading JSON from the request body
app.use(express.json());
// allowing cross-origin requests
app.use(cors({origin: '*', optionsSuccessStatus: 200}));

app.use('/api', McuRouter);

const PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log(`Server is listening on port ${PORT}`);
    connectToMongoDB();
});