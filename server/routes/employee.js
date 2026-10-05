const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authMiddleware= require('../middleware/auth');

router.use(authMiddleware);

router.get('/',employeeController.getALLEmployees);
router.get('/:id',employeeController.getEmployeeById);
router.post('/',employeeController.createEmployee);
router.put('/edit/:id',employeeController.updateEmployee);
router.delete('/delete/:id',employeeController.deleteEmployee);


module.exports = router;