const { Schema, model } = require("mongoose");

const TurnoBaseSchema = new Schema({
  inicio: { type: String, required: true },
  fin:    { type: String, required: true }
}, { _id: false });

const TiendaSchema = new Schema({
  clienteId: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
  nombre:    { type: String, required: true },
  direccion: { type: String },
  turnoBase: { type: TurnoBaseSchema, required: true }
});
const Tienda = model('Tienda', TiendaSchema);
module.exports = Tienda;