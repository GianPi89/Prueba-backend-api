const express = require("express");
const { body } = require("express-validator");
const {
  register,
  login,
} = require("../controllers/auth.controller");
const validateRequest = require("../middlewares/validateRequest");

const router = express.Router();

// REGISTER
router.post(
  "/register",
  [
    body("email")
      .notEmpty().withMessage("El email es obligatorio")
      .isEmail().withMessage("Email inválido"),
    body("password")
      .notEmpty().withMessage("La contraseña es obligatoria")
      .isLength({ min: 6 }).withMessage("Mínimo 6 caracteres"),
  ],
  validateRequest,
  register
);

// LOGIN
router.post(
  "/login",
  [
    body("email")
      .notEmpty().withMessage("El email es obligatorio")
      .isEmail().withMessage("Email inválido"),
    body("password")
      .notEmpty().withMessage("La contraseña es obligatoria"),
  ],
  validateRequest,
  login
);

module.exports = router;
