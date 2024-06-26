const express = require('express');
const app = express();
const movieRouter = require('./movies/route')

const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      req.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
      return res.status(200).json({});
    }
    next();
  });

  // our defined api url

  app.use('/api/movies/', movieRouter)
  app.use('/api/movie/', movieRouter)
  app.use('/api/account/', movieRouter)

  // handling wrong request
  app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  
  // handling server err
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: error.message,
    });
  });

  module.exports = app