const getAllEmployees = require('../controllers/getAllEmployees');

const getAllEmployeesHandler = async (req, res) => {
    try {
        const employees = await getAllEmployees();
        return res.status(200).json(employees);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = getAllEmployeesHandler;