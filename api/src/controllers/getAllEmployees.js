//! obtiene los datos de la api

const axios = require('axios');
const URL = 'https://dummy.restapiexample.com/api/v1/employees';

const getAllEmployees = async () => {
    const response = await axios.get(URL);
    if (!response) throw new Error('No hay empleados');
    // console.log(response.data);
    const employers = response.data; 
    console.log(typeof(employers.data));
    employers.map((employee) => {
        return {
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age,
        };
    });
    return employers;
};

module.exports = getAllEmployees;

