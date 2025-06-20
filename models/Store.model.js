const { Schema, model } = require("mongoose");

const TiendaSchema = new Schema({
  clienteId: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
  nombre:    { type: String, required: true },
  uid:       { type: String, required: true, unique: true } //! Ref para RRHH
});
const Tienda = model('Tienda', TiendaSchema);
module.exports = Tienda;