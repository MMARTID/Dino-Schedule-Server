const { Schema, model } = require("mongoose");

const HorasSchema = new Schema({
  inicio: { type: String, required: true },
  fin:    { type: String, required: true }  
}, { _id: false });

const AsignacionSchema = new Schema({
  trabajadorId: { type: Schema.Types.ObjectId, ref: 'Trabajador', required: true },
  tiendaId:     { type: Schema.Types.ObjectId, ref: 'Tienda',     required: true },
  fecha:        { type: Date,           required: true },
  horas:        { type: HorasSchema,    required: true }   // usa turnoBase por defecto en UI
});

//! EVITAR DUPLICADOS↓
AsignacionSchema.index({ trabajadorId: 1, tiendaId: 1, fecha: 1 }, { unique: true });

const Asignacion = model('Asignacion', AsignacionSchema);
module.exports = Asignacion;