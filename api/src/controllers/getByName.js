const getAllEmployees = require('../controllers/getAllEmployees');

const getByName = async (name) => {
    const employee = await getAllEmployees();
    if(!name) throw new Error(`no existe el empleado con el nombre: ${name}`);
    const julian = employee.find((emp) => emp.name === name);
    return julian;
};

module.exports = getByName;