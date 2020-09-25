const express = require('express');
const router = new express.Router();
const badges = require('../controllers/badges.js');
const badgesActive = require('../controllers/badgesActive.js');
const departments = require('../controllers/departments.js');
const jobTitles = require('../controllers/jobTitles.js');
const employees = require('../controllers/employees.js');
const employeesActive = require('../controllers/employeesactive.js');

// all the routes for endpoints

router.get('/badges/:badge_number?' , badges.get)
router.get('/badgesactive' , badgesActive.get)
router.get('/department' , departments.get)
router.get('/jobtitles/:department_name?' , jobTitles.get)
router.get('/employees/:department_name?' , employees.get)
router.get('/employeesactive' , employeesActive.get)


module.exports = router;
