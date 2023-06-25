const { Router } = require('express');

const getAllEmployees = require('../controllers/getAllEmployees');
const getByName = require('../controllers/getByName');

const employeesRouter = Router();

//!Rutas
employeesRouter.get('/employee', getAllEmployees);
employeesRouter.get('/name', getByName);

module.exports = employeesRouter;