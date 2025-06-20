const router = require("express").Router();
const Tienda = require("../models/Store.model");

// TODOS LAS TIENDAS:
//! http://localhost:5005/api/stores/all
router.get("/all", async (req, res, next) => {
  try {
    const stores = await Tienda.find().populate("clienteId", "nombre titulo");
    res.status(200).json(stores);
  } catch (error) {
    next(error);
  }
});

// TIENDAS POR CLIENTE:
//! http://localhost:5005/api/stores/:clientId
router.get("/:clientId", async (req, res, next) => {
  const { clientId } = req.params;
  try {
    const stores = await Tienda.find({ clienteId: clientId }).populate(
      "clienteId",
      "nombre titulo"
    );
    res.status(200).json(stores);
    console.log(req.params);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
