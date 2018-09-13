var express = require('express');
var router = express.Router();

const io = require('../services/io')
const crud = require('../services/crud-handler')

/* GET home page. */
let user = 'p184560'

router.get('/', function(req, res, next) {
    // if (req.query.user) {
        io.getData(user).then((result) => {
            console.log(result)
            res.json(JSON.parse(result))
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    // } else {
    // }
});

router.post('/', function(req, res, next) {
    
    let json = req.body
    crud.addItem(json).then((result) => {
        console.log("saved")
        res.json('ok')
    }).catch(err => {
        res.statusCode(500).json('err')
    })
});


router.post('/dismiss', function(req, res, next) {
    console.log("DISMISSING")
    crud.dismissItem(req.body.id).then((result) => {
        console.log("dismissed")
        res.json(result)
    }).catch(err => {
        res.statusCode(500).json('err')
    })
});

module.exports = router;