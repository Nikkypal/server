const express = require('express');

const router = express.Router();

const managecontroller = require('../controllers/manage_controller');

router.get('/manage', managecontroller.manage);

module.exports = router;