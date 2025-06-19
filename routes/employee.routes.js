const router = require("express").Router();
const Trabajador = require("../models/employees.model");

//TODOS LOS EMPLEADOS:
//!http://localhost:5005/api/employees/

router.get("/", async (req, res, next) => {
    const employees = await Trabajador.find();
    console.log(employees);
  res.status(200).json(employees);
});

//AÑADIR UN EMPLEADO:
//!http://localhost:5005/api/employees/

router.post("/", (req, res, next) => {
    const { nombre, uid } = req.body;
    const newEmployee = new Trabajador({ nombre, uid });
    newEmployee.save()
      .then(() => res.status(201).json("Employee added successfully"))
      .catch(err => res.status(500).json({ error: err.message }));
    
  res.json("Adding a new employee");
});

//OBTENER UN EMPLEADO POR ID:
//!http://localhost:5005/api/employees/:id

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  res.json(`Getting employee with ID: ${id}`);
});

//ACTUALIZAR UN EMPLEADO POR ID:
// //!http://localhost:5005/api/employees/:id

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  res.json(`Updating employee with ID: ${id}`);
});

//ELIMINAR UN EMPLEADO POR ID:
//!http://localhost:5005/api/employees/:id

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  res.json(`Deleting employee with ID: ${id}`);
});
module.exports = router;
