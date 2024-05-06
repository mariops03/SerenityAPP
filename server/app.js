const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

require('./config/db');
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin); //solve error
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Set-Cookie');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(cors({
  //origin: 'http://localhost:5173',
  
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(cookieParser());
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
