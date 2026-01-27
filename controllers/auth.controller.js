const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validaciones básicas
    if (!email || !password) {
      return res.status(400).json({
        message: "Email y contraseña son obligatorios",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "La contraseña debe tener al menos 6 caracteres",
      });
    }

    // Verificar si el usuario existe
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({
        message: "El usuario ya existe",
      });
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    await User.create(email, hashedPassword);

    return res.status(201).json({
      message: "Usuario registrado correctamente",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

module.exports = {
  register,
};
