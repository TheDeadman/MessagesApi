var express = require('express');
var router = express.Router();

const io = require('../services/io')

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.query.user) {
        io.getData(req.query.user).then((result) => {
            console.log(result)
            res.json(JSON.parse(result))
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
    } else {
        res.json(500, "Missing required query param 'user'")
    }
});

module.exports = router;