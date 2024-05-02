const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Por favor ingresa un correo electrónico válido']
  },
  password: {
    type: String,
    required: true
  },
  analisis: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Analisis'
  }],
  alivios: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Alivio'
  }]
});

module.exports = mongoose.model('User', userSchema);
