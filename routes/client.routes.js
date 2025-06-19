const router = require("express").Router();
const Cliente = require("../models/Client.model");

// TODOS LOS CLIENTES:
//! http://localhost:5005/api/clients/
router.get("/", async (req, res, next) => {
  try {
    const clients = await Cliente.find();
    res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
});

// AÑADIR UN CLIENTE:
//! http://localhost:5005/api/clients/
router.post('/', async (req, res, next) => {
    const { uid, nombre, titulo } = req.body;
    try {
        const newClient = new Cliente({ uid, nombre, titulo });
        await newClient.save();
        res.status(201).json("Client added successfully");
    } catch (error) {
        next(error);
    }
})

// BORRAR UN CLIENTE:
//! http://localhost:5005/api/clients/:clientId
router.delete('/:clientId', async (req, res, next) => {
    
})
module.exports = router;