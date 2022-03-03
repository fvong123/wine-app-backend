const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// database
const connectDB = require('./db/connect');

// routers
const wineRouter = require('./routes/wineRoutes');

//middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors())

// routes
app.use('/', wineRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`App is listening on port ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();