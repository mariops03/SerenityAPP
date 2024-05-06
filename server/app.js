const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

require('./config/db');

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
