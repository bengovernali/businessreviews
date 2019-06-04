const express = require('express');
const router = express.Router();
const businessModel = require('../models/businessModel');
const reviewModel = require('../models/reviewModel');

/* GET home page. */
router.get('/', async (req, res, next) => {
    const allBusinesses = await businessModel.getAll();
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

router.get('/:business_id', async (req, res, next) => {
    const b_id = req.params.business_id;
    const oneBusiness = await businessModel.getOne(b_id);
    const reviews = await reviewModel.getReviews(b_id);
    res.render('template', {
        locals: {
            title: 'Business Info',
            singleBusiness: oneBusiness,
            businessReviews: reviews
        },
        partials: {
            partial: 'partial-single-business'
        }
    });
});

router.post('/', (req, res) => {
    const {score, content, b_id} = req.body;
    businessModel.createReview(b_id, content, score)
    /*.then(async () => {
        const oneBusiness = await businessModel.getAll();
        res.render('template', {
            locals: {
                title: 'Business Info',
                singleBusiness: oneBusiness,
                businessReviews: reviews
            },
            partials: {
                partial: 'partial-single-business'
            }
        });
    })*/
    .then( () => {
        res.sendStatus(200).end();
    })
    .catch((err) => {
        res.sendStatus(500).send(err.message);
    });
});

module.exports = router;