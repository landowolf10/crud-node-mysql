const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomerController');

router.get('/', customerController.getCustomers);
router.post('/add', customerController.addCustomer);
router.get('/delete/:id', customerController.deleteCustomer);

module.exports = router;