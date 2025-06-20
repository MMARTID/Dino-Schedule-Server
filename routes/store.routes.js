const router = require("express").Router();
const Tienda = require("../models/Store.model");

// TODOS LAS TIENDAS:
//! http://localhost:5005/api/stores/
router.get("/", async (req, res, next) => {
    try {
        const stores = await Tienda.find().populate('clienteId', 'nombre titulo');
        res.status(200).json(stores);
    } catch (error) {
        next(error);
    }
})
module.exports = router;