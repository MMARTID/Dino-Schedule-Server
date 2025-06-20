const mongoose = require("mongoose");
const Tienda = require("../models/Store.model");

mongoose.connect("mongodb://localhost:27017/DINO-SCHEDULE-SERVER", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

(async () => {
  try {
    const result = await Tienda.updateMany(
      { clienteId: { $type: "string" } },
      [
        {
          $set: {
            clienteId: { $toObjectId: "$clienteId" }
          }
        }
      ]
    );

    console.log("✅ Migración completada");
    console.log(`🔁 Documentos modificados: ${result.modifiedCount}`);
  } catch (err) {
    console.error("❌ Error en la migración:", err);
  } finally {
    mongoose.disconnect();
  }
  const count = await Tienda.countDocuments({ clienteId: { $type: "string" } });
  console.log(`tiendas restantes con clienteId tipo string: ${count}`);
})();