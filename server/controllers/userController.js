const User = require('../models/users');
const Analisis = require('../models/analisis');
const Alivio = require('../models/alivios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.createUser = async (req, res) => {
  try {
    const { email, password, analisis, alivios } = req.body; 
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });

    // Agregar análisis y alivios si existen
    if (analisis) {
      const analisisDocs = await Analisis.insertMany(analisis);
      user.analisis = analisisDocs.map(doc => doc._id);
    }
    if (alivios) {
      const alivioDocs = await Alivio.insertMany(alivios);
      user.alivios = alivioDocs.map(doc => doc._id);
    }

    await user.save();
    const token = jwt.sign({ id: user._id }, 'ministro', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ message: 'Usuario registrado con éxito', user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('analisis alivios');
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { email, password, analisis, alivios } = req.body; 
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    user.email = email || user.email;
    user.password = password ? await bcrypt.hash(password, 10) : user.password;
    user.analisis = analisis || user.analisis;
    user.alivios = alivios || user.alivios;

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }
      const token = jwt.sign({ id: user._id }, 'ministro', { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true });
      res.json({ message: 'Inicio de sesión exitoso', user: { id: user._id, email: user.email } });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.verifyAuth = (req, res) => {
    console.log('Token recibido:', req.cookies.token);
    const token = req.cookies.token;
    if (!token) {
      console.log('No autenticado: No hay token');
      return res.status(401).send('No autenticado');
    }
    try {
      jwt.verify(token, 'ministro');
      console.log('Autenticado con éxito');
      res.send('Autenticado');
    } catch (error) {
      console.log('Error al verificar el token:', error);
      res.status(401).send('No autenticado');
    }
  };
