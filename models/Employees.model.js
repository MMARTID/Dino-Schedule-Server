const { Schema, model } = require("mongoose");

const TrabajadorSchema = new Schema({
  nombre: { type: String, required: true },
  uid:    { type: String, unique: true } //! Ref para RRHH
});
const Trabajador = model('Trabajadores', TrabajadorSchema);
module.exports = Trabajador;


