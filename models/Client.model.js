const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema({
  uid:   { type: String, required: true, unique: true }, //! Ref para RRHH
  nombre:{ type: String, required: true }
});
const Cliente = model('Cliente', ClienteSchema);
module.exports = Cliente;