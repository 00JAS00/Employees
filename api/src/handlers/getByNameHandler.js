const getByName = require('../controllers/getByName');

const getByname = (req, res) => {
    const { name } = req.query; 
    try {
        const response = getByName(name);
        return res.statu(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message})
    }
};

module.exports = getByname;