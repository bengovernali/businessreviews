const express = require('express');
const router = express.Router();
const businessModel = require('../models/businessModel');

/* GET home page. */
router.get('/', async (req, res, next) => {
    const allBusinesses = await businessModel.getAll();
    console.log(allBusinesses);
    res.render('template', {
        locals: {
            title: 'List of Businesses',
            listOfBusinesses: allBusinesses
        },
        partials: {
            partial: 'partial-business'
        }
    });
});

module.exports = router;