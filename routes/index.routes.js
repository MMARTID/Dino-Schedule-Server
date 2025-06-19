const router = require("express").Router();

//http://localhost:5005/api/
router.get("/", (req, res, next) => {
  res.json("All good in the server");
});

const employeeRoutes = require("./employee.routes");
router.use("/employees", employeeRoutes);

const storeRoutes = require("./store.routes");
router.use("/stores", storeRoutes);

const clientRoutes = require("./client.routes");
router.use("/clients", clientRoutes);

const assignmentRoutes = require("./assignment.routes");
router.use("/assignments", assignmentRoutes);

module.exports = router;
