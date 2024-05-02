const mongoose = require('mongoose');

const alivioSchema = new mongoose.Schema({
  descripcion: String,
  efectividad: Number,
  fecha: Date
});

module.exports = mongoose.model('Alivio', alivioSchema);