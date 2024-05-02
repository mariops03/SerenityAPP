const mongoose = require('mongoose');

const analisisSchema = new mongoose.Schema({
  nombre: String,
  resultado: String,
  fecha: Date
});

module.exports = mongoose.model('Analisis', analisisSchema);


